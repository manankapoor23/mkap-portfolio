import { execSync } from "node:child_process";

function commitSha() {
  if (process.env.VERCEL_GIT_COMMIT_SHA) return process.env.VERCEL_GIT_COMMIT_SHA;
  try {
    return execSync("git rev-parse HEAD", { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
  } catch {
    return "";
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Inlined at build time for the footer's "updated" line.
  env: {
    BUILD_TIME: new Date().toISOString(),
    BUILD_COMMIT: commitSha(),
  },
};
export default nextConfig;
