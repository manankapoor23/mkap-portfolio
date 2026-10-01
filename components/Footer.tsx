import { Suspense } from "react";
import LocalTime from "./LocalTime";
import Weather from "./Weather";
import { profile } from "@/lib/site";

const builtAt = process.env.BUILD_TIME ? new Date(process.env.BUILD_TIME) : null;
const commit = process.env.BUILD_COMMIT;

export default function Footer() {
  return (
    <footer className="mono mt-18 border-t border-rule py-12 text-muted">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <a href={`mailto:${profile.email}`} className="hover:text-fg">email</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg">github</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">linkedin</a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="hover:text-fg">résumé</a>
        </div>
        <p className="text-faint">
          Chandigarh · <LocalTime />
          <Suspense fallback={null}>
            <Weather />
          </Suspense>
        </p>
      </div>
      {builtAt ? (
        <p className="mt-3 text-faint">
          updated{" "}
          {builtAt.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Kolkata" })}
          {commit ? (
            <>
              {" · "}
              <a href={`https://github.com/manankapoor23/mkap-portfolio/commit/${commit}`} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
                {commit.slice(0, 7)}
              </a>
            </>
          ) : null}
        </p>
      ) : null}
    </footer>
  );
}
