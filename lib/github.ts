const USER = "manankapoor23";
const HIDDEN = new Set([USER, "mkap-portfolio"]);
const REVALIDATE = 3600;

export type Repo = {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  pushedAt: string;
};

export type ContributionDay = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

export type GitHubData = {
  repos: Repo[];
  publicRepos: number | null;
  calendar: { total: number; weeks: ContributionDay[][] } | null;
};

const LEVELS: Record<string, ContributionDay["level"]> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

function headers(): HeadersInit {
  const h: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": `${USER}-portfolio`,
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) h.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  return h;
}

async function getJSON<T>(url: string, init?: RequestInit): Promise<T | null> {
  try {
    const res = await fetch(url, {
      ...init,
      headers: { ...headers(), ...init?.headers },
      next: { revalidate: REVALIDATE },
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

type RestRepo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

async function getRepos(): Promise<Repo[]> {
  const data = await getJSON<RestRepo[]>(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`);
  if (!Array.isArray(data)) return [];
  return data
    .filter((r) => !r.fork && !r.archived && !HIDDEN.has(r.name))
    .slice(0, 5)
    .map((r) => ({
      name: r.name,
      url: r.html_url,
      description: r.description,
      language: r.language,
      stars: r.stargazers_count,
      pushedAt: r.pushed_at,
    }));
}

async function getPublicRepoCount(): Promise<number | null> {
  const data = await getJSON<{ public_repos: number }>(`https://api.github.com/users/${USER}`);
  return data?.public_repos ?? null;
}

type CalendarResponse = {
  data?: {
    user?: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: { contributionDays: { date: string; contributionCount: number; contributionLevel: string }[] }[];
        };
      };
    };
  };
};

// The contribution calendar is only exposed via GraphQL, which requires a token.
async function getCalendar(): Promise<GitHubData["calendar"]> {
  if (!process.env.GITHUB_TOKEN) return null;
  const query = `query($login: String!) { user(login: $login) { contributionsCollection { contributionCalendar {
    totalContributions weeks { contributionDays { date contributionCount contributionLevel } } } } } }`;
  const data = await getJSON<CalendarResponse>("https://api.github.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { login: USER } }),
  });
  const cal = data?.data?.user?.contributionsCollection.contributionCalendar;
  if (!cal) return null;
  return {
    total: cal.totalContributions,
    weeks: cal.weeks.map((w) =>
      w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount, level: LEVELS[d.contributionLevel] ?? 0 })),
    ),
  };
}

export async function getGitHub(): Promise<GitHubData> {
  const [repos, publicRepos, calendar] = await Promise.all([getRepos(), getPublicRepoCount(), getCalendar()]);
  return { repos, publicRepos, calendar };
}
