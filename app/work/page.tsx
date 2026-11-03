import ProjectRow from "@/components/ProjectRow";
import { getProjects } from "@/lib/content";
import { getFeaturedRepos } from "@/lib/github";

export const metadata = { title: "Work" };

export default async function WorkPage() {
  const projects = getProjects().filter((project) => project.featured !== false);
  const featured = (await getFeaturedRepos())
    .filter((repo) => !projects.some((project) => project.links?.github?.toLowerCase() === repo.url.toLowerCase()))
    .slice(0, 4);
  return (
    <section>
      <h1 className="text-[2.25rem] font-medium leading-[1.15] tracking-[-0.015em]">Work</h1>
      <p className="mt-3 text-muted">Selected apps, research, and engineering projects.</p>
      <div className="mt-12 space-y-8">
        {projects.map((p) => <ProjectRow key={p.slug} project={p} showStats />)}
      </div>
      {featured.length ? (
        <section className="mt-16">
          <h2 className="mono text-faint">More from GitHub · refreshed weekly</h2>
          <div className="mt-6 space-y-8">
            {featured.map((repo) => (
              <div key={repo.name} className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] sm:gap-x-2">
                <span className="mono tabular pt-[0.2rem] text-faint">{new Date(repo.createdAt).getUTCFullYear()}</span>
                <div>
                  <a href={repo.url} target="_blank" rel="noopener noreferrer" className="link ext text-[1.0625rem] font-medium">{repo.name}</a>
                  <p className="text-[0.9375rem] leading-normal text-muted">{repo.description}</p>
                  {repo.language ? <p className="mono mt-1 text-faint">{repo.language}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </section>
  );
}
