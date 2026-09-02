/**
 * agents-radar: daily digest for AI CLI tools and OpenClaw.
 *
 * Env vars:
 *   LLM_PROVIDER        - "anthropic" | "openai" | "github-copilot" | "openrouter" (default: anthropic)
 *   GITHUB_TOKEN        - GitHub token for API access and issue creation
 *   DIGEST_REPO         - owner/repo where digest issues are posted (optional)
 *
 * Provider-specific env vars — see src/providers/ for full list.
 */

import fs from "node:fs";
import path from "node:path";
import {
  type GitHubItem,
  type RepoFetch,
  fetchRecentItems,
  fetchRecentReleases,
  fetchRecentDiscussions,
  fetchSkillsData,
  createGitHubIssue,
} from "./github.ts";
import {
  type RepoDigest,
  buildCliPrompt,
  buildPeerPrompt,
  buildInfraPrompt,
  buildComparisonPrompt,
  buildInfraComparisonPrompt,
  buildPeersComparisonPrompt,
  buildSkillsPrompt,
  buildJsonTranslationPrompt,
} from "./prompts.ts";
import { buildTrendingPrompt, buildHighlightsPrompt, type ReportHighlights } from "./prompts-data.ts";
import {
  callLlm,
  translateToZh,
  parseLlmJson,
  saveFile,
  autoGenFooter,
  LLM_TOKENS_TRENDING,
} from "./report.ts";
import {
  buildCliReportContent,
  buildOpenclawReportContent,
  buildInfraReportContent,
} from "./report-builders.ts";
import {
  type BilingualBody,
  LANGS,
  saveWebReport,
  saveTrendingReport,
  saveHnReport,
  savePhReport,
  saveArxivReport,
  saveHfReport,
  saveCommunityReport,
} from "./report-savers.ts";
import { loadWebState, fetchSiteContent, type WebFetchResult, type WebState } from "./web.ts";
import { fetchTrendingData, type TrendingData } from "./trending.ts";
import { fetchHnData, type HnData } from "./hn.ts";
import { fetchPhData, type PhData } from "./ph.ts";
import { fetchArxivData, type ArxivData } from "./arxiv.ts";
import { fetchHfData, type HfData } from "./hf.ts";
import { fetchDevtoData, type DevtoData } from "./devto.ts";
import { fetchLobstersData, type LobstersData } from "./lobsters.ts";
import { loadConfig } from "./config.ts";
import { toCstDateStr, toUtcStr, weekdayOf } from "./date.ts";
import {
  type Lang,
  MSG,
  ISSUE_LABELS,
  CLI_ISSUE_TITLE,
  OPENCLAW_ISSUE_TITLE,
  INFRA_ISSUE_TITLE,
} from "./i18n.ts";

// ---------------------------------------------------------------------------
// Repo config — loaded from config.yml, falls back to built-in defaults
// ---------------------------------------------------------------------------

const {
  cliRepos: CLI_REPOS,
  skillsRepo: CLAUDE_SKILLS_REPO,
  openclaw: OPENCLAW,
  openclawPeers: OPENCLAW_PEERS,
  infraRepos: INFRA_REPOS,
} = loadConfig();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

// ---------------------------------------------------------------------------
// Phase 1: Fetch
// ---------------------------------------------------------------------------

async function fetchAllData(
  since: Date,
  webState: WebState,
  fetchHf: boolean,
): Promise<{
  fetched: RepoFetch[];
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] };
  webResults: WebFetchResult[];
  trendingData: TrendingData;
  hnData: HnData;
  phData: PhData;
  arxivData: ArxivData;
  hfData: HfData;
  devtoData: DevtoData;
  lobstersData: LobstersData;
}> {
  const allConfigs = [...CLI_REPOS, OPENCLAW, ...OPENCLAW_PEERS, ...INFRA_REPOS];
  console.log(
    `  Tracking: ${allConfigs.map((r) => r.id).join(", ")}, claude-code-skills, web, hn, ph, arxiv, ` +
      `${fetchHf ? "hf, " : ""}devto, lobsters`,
  );

  const [
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    devtoData,
    lobstersData,
  ] = await Promise.all([
    Promise.all(
      allConfigs.map(async (cfg) => {
        try {
          const [issuesRaw, prs, releases, discussions] = await Promise.all([
            fetchRecentItems(cfg, "issues", since),
            fetchRecentItems(cfg, "pulls", since),
            fetchRecentReleases(cfg.repo, since),
            cfg.discussions ? fetchRecentDiscussions(cfg.repo, since) : Promise.resolve([]),
          ]);
          const issues = issuesRaw.filter((i) => !i.pull_request);
          console.log(
            `  [${cfg.id}] issues: ${issues.length}, prs: ${prs.length}, releases: ${releases.length}` +
              (cfg.discussions ? `, discussions: ${discussions.length}` : ""),
          );
          return { cfg, issues, prs, releases, discussions };
        } catch (err) {
          console.error(`  [${cfg.id}] fetch failed: ${err}`);
          return { cfg, issues: [], prs: [], releases: [], discussions: [] };
        }
      }),
    ),
    fetchSkillsData(CLAUDE_SKILLS_REPO)
      .then((d) => {
        console.log(`  [claude-code-skills] prs: ${d.prs.length}, issues: ${d.issues.length}`);
        return d;
      })
      .catch((err) => {
        console.error(`  [claude-code-skills] fetch failed: ${err}`);
        return { prs: [] as GitHubItem[], issues: [] as GitHubItem[] };
      }),
    Promise.all([
      fetchSiteContent("anthropic", webState).catch((err): WebFetchResult => {
        console.error(`  [web/anthropic] fetch failed: ${err}`);
        return {
          site: "anthropic",
          siteName: "Anthropic (Claude)",
          isFirstRun: false,
          newItems: [],
          totalDiscovered: 0,
        };
      }),
      fetchSiteContent("openai", webState).catch((err): WebFetchResult => {
        console.error(`  [web/openai] fetch failed: ${err}`);
        return { site: "openai", siteName: "OpenAI", isFirstRun: false, newItems: [], totalDiscovered: 0 };
      }),
    ]),
    fetchTrendingData().catch(
      (): TrendingData => ({
        trendingRepos: [],
        searchRepos: [],
        trendingFetchSuccess: false,
      }),
    ),
    fetchHnData().catch((): HnData => ({ stories: [], fetchSuccess: false })),
    fetchPhData().catch((): PhData => ({ products: [], fetchSuccess: false })),
    fetchArxivData().catch((): ArxivData => ({ papers: [], fetchSuccess: false })),
    fetchHf
      ? fetchHfData().catch((): HfData => ({ models: [], fetchSuccess: false }))
      : Promise.resolve<HfData>({ models: [], fetchSuccess: false }),
    fetchDevtoData().catch((): DevtoData => ({ articles: [], fetchSuccess: false })),
    fetchLobstersData().catch((): LobstersData => ({ stories: [], fetchSuccess: false })),
  ]);

  return {
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    devtoData,
    lobstersData,
  };
}

// ---------------------------------------------------------------------------
// Phase 2: LLM summaries
// ---------------------------------------------------------------------------

/** Call LLM with logging and error fallback. */
async function summarize(id: string, prompt: string, failMsg: string, maxTokens?: number): Promise<string> {
  console.log(`  [${id}] Calling LLM for summary...`);
  try {
    return await callLlm(prompt, maxTokens);
  } catch (err) {
    console.error(`  [${id}] LLM call failed: ${err}`);
    return failMsg;
  }
}

/** Summarize a repo's activity, returning a RepoDigest. Skips LLM if no data. */
async function summarizeRepo(
  { cfg, issues, prs, releases, discussions }: RepoFetch,
  prompt: string,
  noActivityMsg: string,
  failMsg: string,
): Promise<RepoDigest> {
  if (!issues.length && !prs.length && !releases.length && !discussions.length) {
    console.log(`  [${cfg.id}] No activity, skipping LLM call`);
    return { config: cfg, issues, prs, releases, discussions, summary: noActivityMsg };
  }
  const summary = await summarize(cfg.id, prompt, failMsg);
  return { config: cfg, issues, prs, releases, discussions, summary };
}

/** Every LLM-generated report body for one language. */
interface Summaries {
  cliDigests: RepoDigest[];
  openclawSummary: string;
  skillsSummary: string;
  peerDigests: RepoDigest[];
  infraDigests: RepoDigest[];
  trendingSummary: string;
}

/**
 * Generate every report body in English. Chinese comes from
 * `translateSummaries`, not from a second pass over the raw data — see
 * `translateToZh` in report.ts for why.
 */
async function generateSummaries(
  fetchedCli: RepoFetch[],
  fetchedOpenclaw: RepoFetch,
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] },
  fetchedPeers: RepoFetch[],
  fetchedInfra: RepoFetch[],
  trendingData: TrendingData,
  dateStr: string,
): Promise<Summaries> {
  const lang: Lang = "en";
  const noActivity = MSG.noActivity[lang];
  const fail = MSG.summaryFailed[lang];

  const [cliDigests, openclawSummary, skillsSummary, peerDigests, infraDigests, trendingSummary] =
    await Promise.all([
      Promise.all(
        fetchedCli.map((f) =>
          summarizeRepo(
            f,
            buildCliPrompt(f.cfg, f.issues, f.prs, f.releases, f.discussions, dateStr, lang),
            noActivity,
            fail,
          ),
        ),
      ),
      summarizeRepo(
        fetchedOpenclaw,
        buildPeerPrompt(
          fetchedOpenclaw.cfg,
          fetchedOpenclaw.issues,
          fetchedOpenclaw.prs,
          fetchedOpenclaw.releases,
          dateStr,
          50,
          30,
          lang,
        ),
        noActivity,
        fail,
      ).then((d) => d.summary),
      summarize(
        "claude-code-skills",
        buildSkillsPrompt(skillsData.prs, skillsData.issues, dateStr, lang),
        MSG.skillsFailed[lang],
      ),
      Promise.all(
        fetchedPeers.map((f) =>
          summarizeRepo(
            f,
            buildPeerPrompt(f.cfg, f.issues, f.prs, f.releases, dateStr, undefined, undefined, lang),
            noActivity,
            fail,
          ),
        ),
      ),
      Promise.all(
        fetchedInfra.map((f) =>
          summarizeRepo(
            f,
            buildInfraPrompt(f.cfg, f.issues, f.prs, f.releases, dateStr, lang),
            noActivity,
            fail,
          ),
        ),
      ),
      (async () => {
        const hasData = trendingData.trendingRepos.length > 0 || trendingData.searchRepos.length > 0;
        if (!hasData) {
          return MSG.trendingNoData[lang];
        }
        return summarize(
          "trending",
          buildTrendingPrompt(trendingData, dateStr, lang),
          MSG.trendingFailed[lang],
          LLM_TOKENS_TRENDING,
        );
      })(),
    ]);

  return { cliDigests, openclawSummary, skillsSummary, peerDigests, infraDigests, trendingSummary };
}

// ---------------------------------------------------------------------------
// Phase 2b: Chinese translation
// ---------------------------------------------------------------------------

/**
 * Fixed status strings ("no activity", "generation failed") are i18n constants,
 * not model output. Map them straight across rather than paying for a
 * translation call that would only re-derive Chinese we already have — on a
 * quiet day that is most of the peer digests.
 */
const FIXED_EN_TO_ZH = new Map(Object.values(MSG).map((m) => [m.en, m.zh] as [string, string]));

function localize(enText: string, maxTokens?: number): Promise<string> {
  const fixed = FIXED_EN_TO_ZH.get(enText);
  return fixed !== undefined ? Promise.resolve(fixed) : translateToZh(enText, maxTokens);
}

async function localizeDigest(d: RepoDigest): Promise<RepoDigest> {
  return { ...d, summary: await localize(d.summary) };
}

/** Translate a full set of English report bodies into Chinese. */
async function translateSummaries(en: Summaries): Promise<Summaries> {
  const [cliDigests, openclawSummary, skillsSummary, peerDigests, infraDigests, trendingSummary] =
    await Promise.all([
      Promise.all(en.cliDigests.map(localizeDigest)),
      localize(en.openclawSummary),
      localize(en.skillsSummary),
      Promise.all(en.peerDigests.map(localizeDigest)),
      Promise.all(en.infraDigests.map(localizeDigest)),
      localize(en.trendingSummary, LLM_TOKENS_TRENDING),
    ]);
  return { cliDigests, openclawSummary, skillsSummary, peerDigests, infraDigests, trendingSummary };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

/**
 * The Hugging Face report runs weekly, not daily. The Hub's trending list is
 * ranked by cumulative downloads, so it barely moves: measured over 14 days,
 * 90.5% of the models in a given day's report were already in the previous
 * day's. Weekly keeps the signal and drops 12 LLM calls a week (six days of
 * generate + translate), plus the Hub fetch on those days.
 * 1 = Monday, against the CST date the digest folder is named for.
 */
const HF_REPORT_WEEKDAY = 1;

async function main(): Promise<void> {
  requireEnv("GITHUB_TOKEN");

  const now = new Date();
  const since = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const dateStr = toCstDateStr(now);
  const utcStr = toUtcStr(now);
  const digestRepo = process.env["DIGEST_REPO"] ?? "";

  const providerName = process.env["LLM_PROVIDER"] ?? "anthropic";
  const isHfWeek = weekdayOf(dateStr) === HF_REPORT_WEEKDAY;
  console.log(
    `[${now.toISOString()}] Starting digest | provider: ${providerName} | HF weekly: ${isHfWeek ? "yes" : "no"}`,
  );

  // 1. Fetch all data in parallel
  const webState = loadWebState();
  const {
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    devtoData,
    lobstersData,
  } = await fetchAllData(since, webState, isHfWeek);

  const peerIds = new Set(OPENCLAW_PEERS.map((p) => p.id));
  const infraIds = new Set(INFRA_REPOS.map((r) => r.id));
  const fetchedCli = fetched.filter(
    (f) => f.cfg.id !== OPENCLAW.id && !peerIds.has(f.cfg.id) && !infraIds.has(f.cfg.id),
  );
  const fetchedOpenclaw = fetched.find((f) => f.cfg.id === OPENCLAW.id)!;
  const fetchedPeers = fetched.filter((f) => peerIds.has(f.cfg.id));
  const fetchedInfra = fetched.filter((f) => infraIds.has(f.cfg.id));

  // 2. Generate every report body once in English, then translate to Chinese
  console.log("  Generating summaries (EN)...");
  const enSummaries = await generateSummaries(
    fetchedCli,
    fetchedOpenclaw,
    skillsData,
    fetchedPeers,
    fetchedInfra,
    trendingData,
    dateStr,
  );

  console.log("  Translating summaries (EN -> ZH)...");
  const zhSummaries = await translateSummaries(enSummaries);

  // 3. Generate cross-repo comparisons in English, then translate
  console.log("  Calling LLM for comparative analyses (EN)...");
  const summariesByLang: Record<Lang, Summaries> = { zh: zhSummaries, en: enSummaries };

  const makeOpenclawDigest = (lang: Lang): RepoDigest => ({
    config: OPENCLAW,
    issues: fetchedOpenclaw.issues,
    prs: fetchedOpenclaw.prs,
    releases: fetchedOpenclaw.releases,
    discussions: fetchedOpenclaw.discussions,
    summary: summariesByLang[lang].openclawSummary,
  });

  // Routed through summarize() so a failed comparison degrades to a fixed
  // notice, the same way a failed per-repo summary does. These calls used to be
  // bare: on 2026-08-28 the provider was unreachable, and the rejection here
  // aborted main() — discarding every summary already generated along with the
  // HN, ArXiv, Product Hunt, trending and web reports, whose data had all been
  // fetched successfully and which have nothing to do with a comparison.
  const [enComparison, enPeersComparison, enInfraComparison] = await Promise.all([
    summarize(
      "cli-comparison",
      buildComparisonPrompt(enSummaries.cliDigests, dateStr, "en"),
      MSG.comparisonFailed.en,
    ),
    summarize(
      "peers-comparison",
      buildPeersComparisonPrompt(makeOpenclawDigest("en"), enSummaries.peerDigests, dateStr, "en"),
      MSG.comparisonFailed.en,
    ),
    summarize(
      "infra-comparison",
      buildInfraComparisonPrompt(enSummaries.infraDigests, dateStr, "en"),
      MSG.comparisonFailed.en,
    ),
  ]);

  console.log("  Translating comparative analyses (EN -> ZH)...");
  // localize(), not translateToZh(): when a comparison fell back to the fixed
  // notice there is nothing to translate, and its Chinese text is already known.
  const [zhComparison, zhPeersComparison, zhInfraComparison] = await Promise.all([
    localize(enComparison),
    localize(enPeersComparison),
    localize(enInfraComparison),
  ]);

  const comparisonByLang = { zh: zhComparison, en: enComparison };
  const peersComparisonByLang = { zh: zhPeersComparison, en: enPeersComparison };
  const infraComparisonByLang = { zh: zhInfraComparison, en: enInfraComparison };

  // 4. Build + save all reports (zh + en)
  const cliContent: Record<Lang, string> = {} as Record<Lang, string>;
  const openclawContent: Record<Lang, string> = {} as Record<Lang, string>;
  const infraContent: Record<Lang, string> = {} as Record<Lang, string>;

  for (const lang of LANGS) {
    const s = summariesByLang[lang];
    const ft = autoGenFooter(lang);
    const suffix = lang === "en" ? "-en" : "";

    cliContent[lang] = buildCliReportContent(
      s.cliDigests,
      s.skillsSummary,
      comparisonByLang[lang],
      utcStr,
      dateStr,
      ft,
      CLAUDE_SKILLS_REPO,
      lang,
    );
    openclawContent[lang] = buildOpenclawReportContent(
      fetchedOpenclaw,
      s.peerDigests,
      s.openclawSummary,
      peersComparisonByLang[lang],
      utcStr,
      dateStr,
      ft,
      OPENCLAW,
      OPENCLAW_PEERS,
      lang,
    );

    infraContent[lang] = buildInfraReportContent(
      s.infraDigests,
      infraComparisonByLang[lang],
      utcStr,
      dateStr,
      ft,
      lang,
    );

    console.log(`  Saved ${saveFile(cliContent[lang], dateStr, `ai-cli${suffix}.md`)}`);
    console.log(`  Saved ${saveFile(openclawContent[lang], dateStr, `ai-agents${suffix}.md`)}`);
    console.log(`  Saved ${saveFile(infraContent[lang], dateStr, `ai-infra${suffix}.md`)}`);
  }

  // Each saver now emits both languages: it generates its body in English,
  // translates it, and writes both files plus both issues.
  const trendingSummaries: BilingualBody = {
    zh: zhSummaries.trendingSummary,
    en: enSummaries.trendingSummary,
  };

  if (!isHfWeek) {
    console.log("  [hf] Weekly report — not scheduled today, skipping.");
  }

  await Promise.all([
    saveWebReport(webResults, webState, utcStr, dateStr, digestRepo),
    saveTrendingReport(trendingData, trendingSummaries, utcStr, dateStr, digestRepo),
    saveHnReport(hnData, utcStr, dateStr, digestRepo),
    savePhReport(phData, utcStr, dateStr, digestRepo),
    saveArxivReport(arxivData, utcStr, dateStr, digestRepo),
    saveCommunityReport(devtoData, lobstersData, utcStr, dateStr, digestRepo),
    ...(isHfWeek ? [saveHfReport(hfData, utcStr, dateStr, digestRepo)] : []),
  ]);

  // 5. Generate highlights for Telegram notification
  const readReport = (name: string): string | undefined => {
    const p = path.join("digests", dateStr, name);
    return fs.existsSync(p) ? fs.readFileSync(p, "utf-8") : undefined;
  };

  // Highlights are extracted from the English reports only — the Chinese set is
  // translated from the result, so the Chinese files are never re-read here.
  const enReports: Record<string, string> = {
    "ai-cli": cliContent.en,
    "ai-agents": openclawContent.en,
    "ai-infra": infraContent.en,
  };
  for (const [id, enFile] of [
    ["ai-trending", "ai-trending-en.md"],
    ["ai-web", "ai-web-en.md"],
    ["ai-hn", "ai-hn-en.md"],
    ["ai-ph", "ai-ph-en.md"],
    ["ai-arxiv", "ai-arxiv-en.md"],
    ["ai-hf", "ai-hf-en.md"],
    ["ai-community", "ai-community-en.md"],
  ] as const) {
    const en = readReport(enFile);
    if (en) enReports[id] = en;
  }

  console.log("  Generating highlights for Telegram...");
  const highlights: Record<Lang, ReportHighlights> = { zh: {}, en: {} };
  // Both passes parse JSON, and both retry once: the LLM occasionally emits
  // slightly malformed JSON that repairJson can't fix (seen 2026-07-13: zh
  // failed with "Expected ',' or ']' after array element"); a fresh generation
  // usually returns valid JSON.
  const attemptJson = async (label: string, prompt: string): Promise<ReportHighlights> => {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        return parseLlmJson<ReportHighlights>(await callLlm(prompt, 2048));
      } catch (err) {
        const tag = attempt < 2 ? "retrying" : "giving up";
        console.error(`  [highlights] ${label} attempt ${attempt} failed (${tag}): ${err}`);
      }
    }
    return {};
  };

  // English is extracted from the reports; Chinese is translated from that
  // result. The extraction prompt carries every report body, the translation
  // prompt carries only the short highlight list.
  highlights.en = await attemptJson("en", buildHighlightsPrompt(enReports, "en"));
  highlights.zh = Object.keys(highlights.en).length
    ? await attemptJson("zh", buildJsonTranslationPrompt(JSON.stringify(highlights.en)))
    : {};

  // If one language failed (generation or parse) but the other succeeded,
  // backfill the empty one from the other so notifications never render with
  // zero highlights. Seen 2026-07-13: zh failed intermittently while en was
  // fine, leaving Telegram/Feishu with only section headers and no bullets.
  const zhEmpty = Object.keys(highlights.zh).length === 0;
  const enEmpty = Object.keys(highlights.en).length === 0;
  if (zhEmpty && !enEmpty) {
    console.warn("  [highlights] zh empty — backfilling from en");
    highlights.zh = highlights.en;
  } else if (enEmpty && !zhEmpty) {
    console.warn("  [highlights] en empty — backfilling from zh");
    highlights.en = highlights.zh;
  }

  const highlightsPath = saveFile(JSON.stringify(highlights, null, 2), dateStr, "highlights.json");
  console.log(`  Saved ${highlightsPath}`);

  // 6. Create GitHub issues for CLI + OpenClaw (zh + en)
  if (digestRepo) {
    for (const lang of ["zh", "en"] as const) {
      const cliUrl = await createGitHubIssue(
        CLI_ISSUE_TITLE(dateStr, lang),
        cliContent[lang],
        ISSUE_LABELS.cli[lang],
      );
      console.log(`  Created CLI issue (${lang}): ${cliUrl}`);

      const ocUrl = await createGitHubIssue(
        OPENCLAW_ISSUE_TITLE(dateStr, lang),
        openclawContent[lang],
        ISSUE_LABELS.openclaw[lang],
      );
      console.log(`  Created OpenClaw issue (${lang}): ${ocUrl}`);

      const infraUrl = await createGitHubIssue(
        INFRA_ISSUE_TITLE(dateStr, lang),
        infraContent[lang],
        ISSUE_LABELS.infra[lang],
      );
      console.log(`  Created infra issue (${lang}): ${infraUrl}`);
    }
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
