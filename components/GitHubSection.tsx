import SectionLabel from "@/components/SectionLabel";
import { getGitHub, type ContributionDay } from "@/lib/github";
import { profile } from "@/lib/site";

const LEVEL_OPACITY = [0, 0.25, 0.45, 0.7, 1];
const CELL = 9;
const GAP = 2;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function shortDate(iso: string) {
  const d = new Date(iso);
  const day = `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`;
  return d.getUTCFullYear() === new Date().getUTCFullYear() ? day : `${day} ${d.getUTCFullYear()}`;
}

function Heatmap({ weeks, total }: { weeks: ContributionDay[][]; total: number }) {
  const width = weeks.length * (CELL + GAP) - GAP;
  const height = 7 * (CELL + GAP) - GAP;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img" aria-label={`${total} contributions in the last year`}>
      {weeks.map((week, x) =>
        week.map((day) => {
          const y = new Date(`${day.date}T00:00:00Z`).getUTCDay();
          return (
            <rect
              key={day.date}
              x={x * (CELL + GAP)}
              y={y * (CELL + GAP)}
              width={CELL}
              height={CELL}
              rx={1.5}
              fill={day.level === 0 ? "var(--rule)" : "var(--fg)"}
              fillOpacity={day.level === 0 ? 1 : LEVEL_OPACITY[day.level]}
            >
              <title>{`${day.count} on ${day.date}`}</title>
            </rect>
          );
        }),
      )}
    </svg>
  );
}

export default async function GitHubSection() {
  const { repos, publicRepos, calendar } = await getGitHub();
  if (!repos.length && !calendar) return null;

  const summary = [
    calendar ? `${calendar.total.toLocaleString("en-US")} contributions in the last year` : null,
    publicRepos ? `${publicRepos} public repos` : null,
  ].filter(Boolean);

  return (
    <section className="mt-18">
      <SectionLabel>github</SectionLabel>

      {calendar ? <Heatmap weeks={calendar.weeks} total={calendar.total} /> : null}
      {summary.length ? <p className="mono tabular mt-2 text-faint">{summary.join(" · ")}</p> : null}

      {repos.length ? (
        <div className="mt-6 space-y-4">
          {repos.map((r) => (
            <div key={r.name} className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] sm:gap-x-2">
              <span className="mono tabular pt-[0.2rem] text-faint">{shortDate(r.pushedAt)}</span>
              <div>
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="link ext">{r.name}</a>
                {r.description ? <p className="text-[0.9375rem] leading-normal text-muted">{r.description}</p> : null}
                {r.language || r.stars > 0 ? (
                  <p className="mono tabular mt-0.5 text-faint">
                    {[r.language?.toLowerCase(), r.stars > 0 ? `${r.stars} ★` : null].filter(Boolean).join(" · ")}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      <p className="mono mt-6">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link ext text-muted hover:text-fg">all repositories</a>
      </p>
    </section>
  );
}
