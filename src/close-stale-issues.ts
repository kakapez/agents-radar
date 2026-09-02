import { closeSupersededIssues } from "./github.ts";

async function main(): Promise<void> {
  const closed = await closeSupersededIssues();
  console.log(`[close-stale] Closed ${closed} superseded issue(s).`);
}

main().catch((e: unknown) => {
  console.error("[close-stale]", e instanceof Error ? e.message : e);
  process.exit(1);
});
