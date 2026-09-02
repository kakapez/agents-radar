import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const workflowsDir = path.join(repositoryRoot, ".github", "workflows");
const primaryWorkflowPath = path.join(workflowsDir, "daily-digest.yml");

describe("weekly digest workflow", () => {
  it("schedules the native weekly digest and supports manual runs", () => {
    const workflow = fs.readFileSync(primaryWorkflowPath, "utf8");

    expect(workflow).toContain('cron: "0 23 * * 0"');
    expect(workflow).toMatch(/\n\s+workflow_dispatch:\s*\n/);
    expect(workflow).toContain("name: Weekly Agents Radar");
  });

  it("keeps the full publication workflow and weekly concurrency guard", () => {
    const workflow = fs.readFileSync(primaryWorkflowPath, "utf8");

    expect(workflow).toContain("group: weekly-digest");
    expect(workflow).toContain("contents: write");
    expect(workflow).toContain("issues: write");
    expect(workflow).toContain("pages: write");
    expect(workflow).toContain("id-token: write");
    expect(workflow).toContain("run: pnpm start");
    expect(workflow).toContain("run: pnpm manifest");
    expect(workflow).toContain("run: pnpm notify");
    expect(workflow).toContain("run: pnpm notify:feishu");
    expect(workflow).toContain("run: pnpm close-stale");
  });

  it("removes obsolete rollup workflows and commands", () => {
    expect(fs.existsSync(path.join(workflowsDir, "weekly-digest.yml"))).toBe(false);
    expect(fs.existsSync(path.join(workflowsDir, "monthly-digest.yml"))).toBe(false);

    const workflowFiles = fs
      .readdirSync(workflowsDir)
      .filter((file) => file.endsWith(".yml") || file.endsWith(".yaml"));
    for (const file of workflowFiles) {
      const workflow = fs.readFileSync(path.join(workflowsDir, file), "utf8");
      expect(workflow).not.toMatch(/pnpm (weekly|monthly)/);
    }
  });
});
