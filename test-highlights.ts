import { AnthropicProvider } from "./src/providers/anthropic.ts";
import { buildHighlightsPrompt } from "./src/prompts-data.ts";
import * as fs from "node:fs";
import * as path from "node:path";

async function main() {
  const provider = new AnthropicProvider();
  console.log("Testing AnthropicProvider with mimo-v2.5-pro for highlights...");

  const date = "2026-05-26";
  const digestsDir = path.join("digests", date);
  const reports = ["ai-cli", "ai-agents"];
  const zhReports: Record<string, string> = {};
  const enReports: Record<string, string> = {};

  for (const r of reports) {
      const p = path.join(digestsDir, `${r}.md`);
      if (fs.existsSync(p)) zhReports[r] = fs.readFileSync(p, "utf-8");

      const pEn = path.join(digestsDir, `${r}-en.md`);
      if (fs.existsSync(pEn)) enReports[r] = fs.readFileSync(pEn, "utf-8");
  }

  const promptZh = buildHighlightsPrompt(zhReports, "zh");
  const promptEn = buildHighlightsPrompt(enReports, "en");

  try {
    const resZh = await provider.call(promptZh, 2048);
    console.log("Response ZH:", resZh);
    const resEn = await provider.call(promptEn, 2048);
    console.log("Response EN:", resEn);
  } catch (e: any) {
    console.error("Error:", e.message);
  }
}

main();