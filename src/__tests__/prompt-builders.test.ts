import { describe, it, expect } from "vitest";
import {
  buildCliPrompt,
  buildPeerPrompt,
  buildInfraPrompt,
  buildComparisonPrompt,
  buildInfraComparisonPrompt,
  buildPeersComparisonPrompt,
  buildSkillsPrompt,
} from "../prompts.ts";
import {
  buildTrendingPrompt,
  buildWebReportPrompt,
  buildHnPrompt,
  buildPhPrompt,
  buildArxivPrompt,
  buildHfPrompt,
  buildCommunityPrompt,
} from "../prompts-data.ts";
import type { RepoConfig, GitHubItem, GitHubRelease, GitHubDiscussion } from "../github.ts";
import type { RepoDigest } from "../prompts.ts";
import type { TrendingData } from "../trending.ts";
import type { HnData } from "../hn.ts";
import type { WebFetchResult } from "../web.ts";
import type { PhData } from "../ph.ts";
import type { ArxivData } from "../arxiv.ts";
import type { HfData } from "../hf.ts";
import type { DevtoData } from "../devto.ts";
import type { LobstersData } from "../lobsters.ts";

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const cfg: RepoConfig = { id: "test", repo: "org/test", name: "TestTool" };

function makeItem(overrides: Partial<GitHubItem> = {}): GitHubItem {
  return {
    number: 1,
    title: "Issue",
    state: "open",
    user: { login: "alice" },
    labels: [],
    created_at: "2026-03-09T00:00:00Z",
    updated_at: "2026-03-09T12:00:00Z",
    comments: 5,
    reactions: { "+1": 2 },
    body: "body",
    html_url: "https://github.com/org/test/issues/1",
    ...overrides,
  };
}

function makeDiscussion(overrides: Partial<GitHubDiscussion> = {}): GitHubDiscussion {
  return {
    number: 42,
    title: "Discussion title",
    body: "Discussion body",
    category: "Ideas",
    author: "alice",
    created_at: "2026-03-09T00:00:00Z",
    updated_at: "2026-03-09T12:00:00Z",
    comments: 4,
    upvotes: 16,
    answered: false,
    html_url: "https://github.com/org/test/discussions/42",
    ...overrides,
  };
}

const release: GitHubRelease = {
  tag_name: "v1.0.0",
  name: "Release 1.0",
  body: "Release notes",
  published_at: "2026-03-09T00:00:00Z",
};

const phData: PhData = {
  products: [
    {
      id: "ph-1",
      name: "AI Product",
      tagline: "Weekly product",
      url: "https://producthunt.com/posts/ai-product",
      website: "https://example.com",
      votesCount: 100,
      commentsCount: 10,
      createdAt: "2026-03-09T00:00:00Z",
      topics: ["ai"],
    },
  ],
  fetchSuccess: true,
};
const arxivData: ArxivData = {
  papers: [
    {
      id: "paper-1",
      title: "AI Paper",
      summary: "Summary",
      authors: ["Author"],
      published: "2026-03-09T00:00:00Z",
      updated: "2026-03-09T00:00:00Z",
      categories: ["cs.AI"],
      url: "https://arxiv.org/abs/paper-1",
      pdfUrl: "https://arxiv.org/pdf/paper-1",
    },
  ],
  fetchSuccess: true,
};
const hfData: HfData = {
  models: [
    {
      id: "org/model",
      author: "org",
      likes: 100,
      downloads: 1000,
      tags: ["text"],
      pipelineTag: "text-generation",
      lastModified: "2026-03-09T00:00:00Z",
      url: "https://huggingface.co/org/model",
    },
  ],
  fetchSuccess: true,
};
const devtoData: DevtoData = {
  articles: [],
  fetchSuccess: true,
};
const lobstersData: LobstersData = {
  stories: [],
  fetchSuccess: true,
};

function makeDigest(overrides: Partial<RepoDigest> = {}): RepoDigest {
  return {
    config: cfg,
    issues: [],
    prs: [],
    releases: [],
    discussions: [],
    summary: "Summary",
    ...overrides,
  };
}

// ---------------------------------------------------------------------------
// buildCliPrompt
// ---------------------------------------------------------------------------

describe("buildCliPrompt", () => {
  it("generates Chinese prompt by default", () => {
    const result = buildCliPrompt(cfg, [makeItem()], [makeItem()], [release], [], "2026-03-09");
    expect(result).toContain("技术分析师");
    expect(result).toContain("TestTool");
    expect(result).toContain("2026-03-09");
    expect(result).toContain("org/test");
    expect(result).toContain("v1.0.0");
    expect(result).toContain("社区动态周报");
    expect(result).toContain("过去7天");
  });

  it("generates English prompt", () => {
    const result = buildCliPrompt(cfg, [makeItem()], [], [], [], "2026-03-09", "en");
    expect(result).toContain("technical analyst");
    expect(result).toContain("TestTool");
    expect(result).toContain("weekly digest");
    expect(result).toContain("the last 7 days");
    expect(result).toContain("Hot Issues");
  });

  it("shows 无 when no data", () => {
    const result = buildCliPrompt(cfg, [], [], [], [], "2026-03-09");
    expect(result).toContain("无");
  });

  it("includes sample notes when items exceed limit", () => {
    const items = Array.from({ length: 50 }, (_, i) => makeItem({ number: i, comments: i }));
    const result = buildCliPrompt(cfg, items, [], [], [], "2026-03-09");
    expect(result).toContain("共 50 条");
    expect(result).toContain("30 条");
  });

  it("omits the Discussions section when there is no discussion data", () => {
    const result = buildCliPrompt(cfg, [makeItem()], [], [], [], "2026-03-09");
    expect(result).not.toContain("最新 Discussions");
  });

  it("renders the Discussions section when data is present", () => {
    const result = buildCliPrompt(cfg, [], [], [], [makeDiscussion()], "2026-03-09");
    expect(result).toContain("最新 Discussions");
    expect(result).toContain("#42 [Ideas]");
    expect(result).toContain("热门 Discussions");
  });

  it("renders the Discussions section in English", () => {
    const result = buildCliPrompt(cfg, [], [], [], [makeDiscussion()], "2026-03-09", "en");
    expect(result).toContain("Latest Discussions");
    expect(result).toContain("Hot Discussions");
  });

  it("samples discussions by engagement when they exceed the limit", () => {
    const items = Array.from({ length: 60 }, (_, i) =>
      makeDiscussion({ number: i, comments: 0, upvotes: i }),
    );
    const result = buildCliPrompt(cfg, [], [], [], items, "2026-03-09");
    expect(result).toContain("共 60 条");
    expect(result).toContain("评论数 + 点赞数最多的 40 条");
    // Highest-upvoted kept, lowest dropped
    expect(result).toContain("#59 [Ideas]");
    expect(result).not.toContain("#0 [Ideas]");
  });
});

// ---------------------------------------------------------------------------
// buildPeerPrompt
// ---------------------------------------------------------------------------

describe("buildPeerPrompt", () => {
  it("includes data overview section", () => {
    const issues = [makeItem({ state: "open" }), makeItem({ state: "closed" })];
    const result = buildPeerPrompt(cfg, issues, [makeItem()], [release], "2026-03-09");
    expect(result).toContain("数据概览");
    expect(result).toContain("新开/活跃: 1");
    expect(result).toContain("已关闭: 1");
    expect(result).toContain("项目动态周报");
    expect(result).toContain("过去7天");
  });

  it("generates English prompt", () => {
    const result = buildPeerPrompt(cfg, [], [], [], "2026-03-09", 30, 20, "en");
    expect(result).toContain("Data Overview");
    expect(result).toContain("weekly project digest");
    expect(result).toContain("the last 7 days");
    expect(result).toContain("None");
  });
});

// ---------------------------------------------------------------------------
// buildInfraPrompt
// ---------------------------------------------------------------------------

describe("buildInfraPrompt", () => {
  it("generates Chinese prompt by default", () => {
    const result = buildInfraPrompt(cfg, [makeItem()], [makeItem()], [release], "2026-03-09");
    expect(result).toContain("AI 基础设施");
    expect(result).toContain("新模型与硬件支持");
    expect(result).toContain("TestTool");
    expect(result).toContain("v1.0.0");
    expect(result).toContain("过去7天");
  });

  it("generates English prompt", () => {
    const result = buildInfraPrompt(cfg, [makeItem()], [], [], "2026-03-09", "en");
    expect(result).toContain("AI infrastructure");
    expect(result).toContain("weekly digest");
    expect(result).toContain("the last 7 days");
    expect(result).toContain("New Model & Hardware Support");
    expect(result).toContain("None");
  });

  it("includes sample notes when items exceed limit", () => {
    const items = Array.from({ length: 50 }, (_, i) => makeItem({ number: i, comments: i }));
    const result = buildInfraPrompt(cfg, items, [], [], "2026-03-09");
    expect(result).toContain("共 50 条");
    expect(result).toContain("30 条");
  });
});

// ---------------------------------------------------------------------------
// buildInfraComparisonPrompt
// ---------------------------------------------------------------------------

describe("buildInfraComparisonPrompt", () => {
  it("includes all digest summaries when they have data", () => {
    const digests = [
      makeDigest({ config: { ...cfg, name: "vLLM" }, summary: "Summary A", issues: [makeItem()] }),
      makeDigest({ config: { ...cfg, name: "Ollama" }, summary: "Summary B", prs: [makeItem()] }),
    ];
    const result = buildInfraComparisonPrompt(digests, "2026-03-09");
    expect(result).toContain("模型支持竞速");
    expect(result).toContain("vLLM");
    expect(result).toContain("Summary A");
    expect(result).toContain("Ollama");
    expect(result).toContain("Summary B");
  });

  it("shows no-activity for empty digests", () => {
    const result = buildInfraComparisonPrompt([makeDigest({ summary: "Summary" })], "2026-03-09");
    expect(result).toContain("过去7天无活动");
  });

  it("generates English prompt", () => {
    const result = buildInfraComparisonPrompt([makeDigest()], "2026-03-09", "en");
    expect(result).toContain("Model Support Race");
    expect(result).toContain("No activity in the last 7 days.");
  });
});

// ---------------------------------------------------------------------------
// buildComparisonPrompt
// ---------------------------------------------------------------------------

describe("buildComparisonPrompt", () => {
  it("includes all digest summaries when they have data", () => {
    const digests = [
      makeDigest({ config: { ...cfg, name: "Tool A" }, summary: "Summary A", issues: [makeItem()] }),
      makeDigest({ config: { ...cfg, name: "Tool B" }, summary: "Summary B", prs: [makeItem()] }),
    ];
    const result = buildComparisonPrompt(digests, "2026-03-09");
    expect(result).toContain("Tool A");
    expect(result).toContain("Summary A");
    expect(result).toContain("Tool B");
    expect(result).toContain("Summary B");
  });

  it("shows no-activity for empty digests", () => {
    const digests = [makeDigest({ summary: "Summary" })]; // no issues/prs/releases
    const result = buildComparisonPrompt(digests, "2026-03-09");
    expect(result).toContain("过去7天无活动");
  });
});

// ---------------------------------------------------------------------------
// buildPeersComparisonPrompt
// ---------------------------------------------------------------------------

describe("buildPeersComparisonPrompt", () => {
  it("includes openclaw and peer sections", () => {
    const openclawDigest = makeDigest({
      config: { id: "openclaw", repo: "openclaw/openclaw", name: "OpenClaw" },
      summary: "OC summary",
    });
    const peerDigests = [
      makeDigest({ config: { ...cfg, name: "Peer" }, summary: "Peer summary", issues: [makeItem()] }),
    ];
    const result = buildPeersComparisonPrompt(openclawDigest, peerDigests, "2026-03-09");
    expect(result).toContain("OpenClaw（核心参照");
    expect(result).toContain("OC summary");
    expect(result).toContain("Peer summary");
    expect(result).toContain("过去7天");
  });

  it("uses the last-seven-days window in English", () => {
    const openclawDigest = makeDigest({
      config: { id: "openclaw", repo: "openclaw/openclaw", name: "OpenClaw" },
    });
    const result = buildPeersComparisonPrompt(openclawDigest, [makeDigest()], "2026-03-09", "en");
    expect(result).toContain("No activity in the last 7 days.");
  });
});

// ---------------------------------------------------------------------------
// buildSkillsPrompt
// ---------------------------------------------------------------------------

describe("buildSkillsPrompt", () => {
  it("includes skills repository context", () => {
    const result = buildSkillsPrompt([makeItem()], [makeItem()], "2026-03-09");
    expect(result).toContain("anthropics/skills");
    expect(result).toContain("Claude Code Skills");
    expect(result).toContain("数据截止 2026-03-09");
    expect(result).not.toContain("过去7天");
  });

  it("generates English variant", () => {
    const result = buildSkillsPrompt([], [], "2026-03-09", "en");
    expect(result).toContain("Claude Code ecosystem");
    expect(result).toContain("data as of 2026-03-09");
    expect(result).not.toContain("last 7 days");
    expect(result).toContain("None");
  });
});

// ---------------------------------------------------------------------------
// buildTrendingPrompt
// ---------------------------------------------------------------------------

describe("buildTrendingPrompt", () => {
  it("includes trending repos", () => {
    const data: TrendingData = {
      trendingRepos: [
        {
          fullName: "org/repo",
          description: "desc",
          language: "Python",
          todayStars: 100,
          totalStars: 5000,
          forks: 200,
          url: "https://github.com/org/repo",
        },
      ],
      searchRepos: [],
      trendingFetchSuccess: true,
    };
    const result = buildTrendingPrompt(data, "2026-03-09");
    expect(result).toContain("org/repo");
    expect(result).toContain("Python");
    expect(result).toContain("5,000");
    expect(result).toContain("+100 today");
  });

  it("shows fetch failure message when trending fails", () => {
    const data: TrendingData = { trendingRepos: [], searchRepos: [], trendingFetchSuccess: false };
    const result = buildTrendingPrompt(data, "2026-03-09");
    expect(result).toContain("未能抓取");
  });

  it("includes search repos with topic tag", () => {
    const data: TrendingData = {
      trendingRepos: [],
      searchRepos: [
        {
          fullName: "ai/agent",
          description: "An AI agent",
          language: "TypeScript",
          stargazersCount: 1000,
          pushedAt: "2026-03-08",
          url: "https://github.com/ai/agent",
          searchQuery: "ai-agent",
        },
      ],
      trendingFetchSuccess: false,
    };
    const result = buildTrendingPrompt(data, "2026-03-09");
    expect(result).toContain("[topic:ai-agent]");
    expect(result).toContain("1,000");
  });
});

describe("weekly data-source prompt wording", () => {
  it("keeps Trending as a current snapshot while using a seven-day search window", () => {
    const data: TrendingData = {
      trendingRepos: [
        {
          fullName: "org/repo",
          description: "d",
          language: "TS",
          todayStars: 7,
          totalStars: 10,
          forks: 1,
          url: "https://github.com/org/repo",
        },
      ],
      searchRepos: [],
      trendingFetchSuccess: true,
    };
    const zh = buildTrendingPrompt(data, "2026-03-09");
    const en = buildTrendingPrompt(data, "2026-03-09", "en");
    expect(zh).toContain("今日 Trending");
    expect(zh).toContain("今日新增 stars");
    expect(zh).toContain("7天内活跃");
    expect(en).toContain("Today's Trending");
    expect(en).toContain("today's new stars");
    expect(en).toContain("active in last 7 days");
  });

  it("identifies Product Hunt, ArXiv, HF, and Community prompts as weekly", () => {
    for (const prompt of [
      buildPhPrompt(phData, "2026-03-09"),
      buildArxivPrompt(arxivData, "2026-03-09"),
      buildHfPrompt(hfData, "2026-03-09"),
      buildCommunityPrompt(devtoData, lobstersData, "2026-03-09"),
    ]) {
      expect(prompt).toContain("周报");
      expect(prompt).toContain("过去7天");
    }
    for (const prompt of [
      buildPhPrompt(phData, "2026-03-09", "en"),
      buildArxivPrompt(arxivData, "2026-03-09", "en"),
      buildCommunityPrompt(devtoData, lobstersData, "2026-03-09", "en"),
    ]) {
      expect(prompt).toContain("Weekly");
      expect(prompt).toContain("last 7 days");
    }
    const hf = buildHfPrompt(hfData, "2026-03-09", "en");
    expect(hf).toContain("Weekly");
    expect(hf).toContain("weekly likes");
  });
});

// ---------------------------------------------------------------------------
// buildWebReportPrompt
// ---------------------------------------------------------------------------

describe("buildWebReportPrompt", () => {
  it("includes site sections for first run", () => {
    const results: WebFetchResult[] = [
      {
        site: "anthropic",
        siteName: "Anthropic",
        isFirstRun: true,
        newItems: [
          {
            url: "https://anthropic.com/news/test",
            title: "Test",
            lastmod: "2026-03-09",
            content: "Content",
            site: "anthropic",
            category: "news",
          },
        ],
        totalDiscovered: 50,
      },
    ];
    const result = buildWebReportPrompt(results, "2026-03-09");
    expect(result).toContain("首次全量抓取");
    expect(result).toContain("Anthropic");
    expect(result).toContain("内容格局总览"); // first-run-only section
  });

  it("shows incremental mode for non-first-run", () => {
    const results: WebFetchResult[] = [
      { site: "openai", siteName: "OpenAI", isFirstRun: false, newItems: [], totalDiscovered: 100 },
    ];
    const result = buildWebReportPrompt(results, "2026-03-09");
    expect(result).toContain("增量更新");
    expect(result).not.toContain("内容格局总览");
  });
});

// ---------------------------------------------------------------------------
// buildHnPrompt
// ---------------------------------------------------------------------------

describe("buildHnPrompt", () => {
  it("includes stories with metadata", () => {
    const data: HnData = {
      stories: [
        {
          id: "123",
          title: "AI News",
          url: "https://example.com/ai",
          hnUrl: "https://news.ycombinator.com/item?id=123",
          points: 200,
          comments: 50,
          author: "bob",
          createdAt: "2026-03-09T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildHnPrompt(data, "2026-03-09");
    expect(result).toContain("AI News");
    expect(result).toContain("分数: 200");
    expect(result).toContain("评论: 50");
    expect(result).toContain("作者: bob");
    expect(result).toContain("共 1 条");
    expect(result).toContain("社区动态周报");
    expect(result).toContain("过去7天");
    expect(result).toContain("当前 top-story 榜单");
    expect(result).toContain("不是完整的七天历史");
  });

  it("generates English variant", () => {
    const data: HnData = {
      stories: [
        {
          id: "1",
          title: "Test",
          url: "https://test.com",
          hnUrl: "https://news.ycombinator.com/item?id=1",
          points: 10,
          comments: 2,
          author: "a",
          createdAt: "2026-03-09T10:00:00Z",
        },
      ],
      fetchSuccess: true,
    };
    const result = buildHnPrompt(data, "2026-03-09", "en");
    expect(result).toContain("Score: 10");
    expect(result).toContain("Comments: 2");
    expect(result).toContain("Hacker News AI Community Weekly Digest");
    expect(result).toContain("last 7 days");
    expect(result).toContain("best-effort current top-story snapshot");
    expect(result).toContain("not a complete seven-day history");
  });
});
