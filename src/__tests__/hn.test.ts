import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchHnData } from "../hn.ts";

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

describe("fetchHnData", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("preserves Hacker News rank order after filtering AI stories", async () => {
    vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
      const url = String(input);

      if (url.endsWith("/topstories.json")) {
        return jsonResponse([101, 102, 103, 104]);
      }

      const id = Number(url.match(/item\/(\d+)\.json$/)?.[1]);
      const items = new Map<number, unknown>([
        [
          101,
          {
            id: 101,
            type: "story",
            by: "alice",
            time: 1_800_000_000,
            title: "Open hardware router",
            score: 500,
            descendants: 20,
            url: "https://example.com/router",
          },
        ],
        [
          102,
          {
            id: 102,
            type: "story",
            by: "bob",
            time: 1_800_000_100,
            title: "A global workspace in language models",
            score: 100,
            descendants: 10,
            url: "https://example.com/language-models",
          },
        ],
        [
          103,
          {
            id: 103,
            type: "story",
            by: "carol",
            time: 1_800_000_200,
            title: "Office suite for AI agents",
            score: 300,
            descendants: 15,
            url: "https://example.com/ai-agents",
          },
        ],
        [
          104,
          {
            id: 104,
            type: "story",
            by: "dave",
            time: 1_800_000_300,
            title: "Ask HN: Favorite terminals",
            score: 400,
            descendants: 30,
            url: "https://example.com/terminals",
          },
        ],
      ]);

      return jsonResponse(items.get(id) ?? null);
    });

    const result = await fetchHnData();

    expect(result.fetchSuccess).toBe(true);
    expect(result.stories.map((story) => story.id)).toEqual(["102", "103"]);
    expect(result.stories.map((story) => story.hnRank)).toEqual([2, 3]);
    expect(result.stories.map((story) => story.points)).toEqual([100, 300]);
  });

  it("returns an unsuccessful result when the topstories request fails", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(jsonResponse({ error: "failed" }, 500));

    const result = await fetchHnData();

    expect(result).toEqual({ stories: [], fetchSuccess: false });
  });
});
