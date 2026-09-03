import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const workflowsDir = path.join(repositoryRoot, ".github", "workflows");
const primaryWorkflowPath = path.join(workflowsDir, "daily-digest.yml");

type Workflow = {
  name?: string;
  on?: { schedule?: Array<{ cron?: string }>; workflow_dispatch?: unknown };
  permissions?: Record<string, string>;
  concurrency?: { group?: string; "cancel-in-progress"?: boolean };
  jobs?: Record<string, { steps?: Array<{ name?: string; run?: string; env?: Record<string, string> }> }>;
};

function loadWorkflow(): Workflow {
  const source = fs.readFileSync(primaryWorkflowPath, "utf8");
  // YAML 1.1 parses the unquoted `on` key as boolean; JSON_SCHEMA preserves it.
  return yaml.load(source, { schema: yaml.JSON_SCHEMA }) as Workflow;
}

describe("weekly digest workflow", () => {
  it("has exactly the Sunday weekly schedule and manual dispatch", () => {
    const workflow = loadWorkflow();
    expect(workflow.name).toBe("Weekly Agents Radar");
    expect(workflow.on?.schedule).toEqual([{ cron: "0 23 * * 0" }]);
    expect(workflow.on).toHaveProperty("workflow_dispatch");
  });

  it("preserves permissions, weekly guard, publication steps, and provider contract", () => {
    const workflow = loadWorkflow();
    expect(workflow.permissions).toEqual({
      contents: "write",
      issues: "write",
      pages: "write",
      "id-token": "write",
    });
    expect(workflow.concurrency).toEqual({ group: "weekly-digest", "cancel-in-progress": false });

    const steps = Object.values(workflow.jobs ?? {}).flatMap((job) => job.steps ?? []);
    const runs = steps.map((step) => step.run).filter((run): run is string => Boolean(run));
    for (const command of [
      "pnpm start",
      "pnpm manifest",
      "pnpm notify",
      "pnpm notify:feishu",
      "pnpm close-stale",
    ]) {
      expect(runs).toContain(command);
    }
    const digestStep = steps.find((step) => step.run === "pnpm start");
    expect(digestStep?.env).toEqual(
      expect.objectContaining({
        GITHUB_TOKEN: "${{ secrets.GITHUB_TOKEN }}",
        ANTHROPIC_BASE_URL: "${{ secrets.ANTHROPIC_BASE_URL }}",
        ANTHROPIC_API_KEY: "${{ secrets.ANTHROPIC_API_KEY }}",
        LLM_PROVIDER: "${{ secrets.LLM_PROVIDER }}",
        OPENAI_API_KEY: "${{ secrets.OPENAI_API_KEY }}",
        OPENAI_BASE_URL: "${{ secrets.OPENAI_BASE_URL }}",
        ANTHROPIC_MODEL: "${{ secrets.ANTHROPIC_MODEL }}",
        OPENAI_MODEL: "${{ secrets.OPENAI_MODEL }}",
        GITHUB_COPILOT_MODEL: "${{ secrets.GITHUB_COPILOT_MODEL }}",
        OPENROUTER_API_KEY: "${{ secrets.OPENROUTER_API_KEY }}",
        OPENROUTER_MODEL: "${{ secrets.OPENROUTER_MODEL }}",
        DEEPSEEK_API_KEY: "${{ secrets.DEEPSEEK_API_KEY }}",
        DEEPSEEK_MODEL: "${{ secrets.DEEPSEEK_MODEL }}",
        DASHSCOPE_API_KEY: "${{ secrets.DASHSCOPE_API_KEY }}",
        DASHSCOPE_BASE_URL: "${{ secrets.DASHSCOPE_BASE_URL }}",
        QWEN_MODEL: "${{ secrets.QWEN_MODEL }}",
        DIGEST_REPO: "${{ github.repository }}",
      }),
    );
  });

  it("removes obsolete rollup workflows and commands", () => {
    expect(fs.existsSync(path.join(workflowsDir, "weekly-digest.yml"))).toBe(false);
    expect(fs.existsSync(path.join(workflowsDir, "monthly-digest.yml"))).toBe(false);
    const workflowFiles = fs.readdirSync(workflowsDir).filter((file) => /\.(yml|yaml)$/.test(file));
    for (const file of workflowFiles) {
      expect(fs.readFileSync(path.join(workflowsDir, file), "utf8")).not.toMatch(/pnpm (weekly|monthly)/);
    }
  });
});
