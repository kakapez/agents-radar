import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchDevtoData } from "../devto.ts";

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
}

describe("fetchDevtoData", () => {
  afterEach(() => vi.restoreAllMocks());

  it("filters articles to since and omits the daily top parameter", async () => {
    const since = new Date("2026-08-26T00:00:00.000Z");
    const articles = [
      {
        id: 1,
        title: "Old",
        description: "",
        url: "https://dev.to/old",
        published_at: "2026-08-25T23:59:59.000Z",
        positive_reactions_count: 99,
        comments_count: 1,
        reading_time_minutes: 1,
        tag_list: ["ai"],
        user: { name: "a" },
      },
      {
        id: 2,
        title: "At cutoff",
        description: "",
        url: "https://dev.to/new",
        published_at: since.toISOString(),
        positive_reactions_count: 4,
        comments_count: 2,
        reading_time_minutes: 2,
        tag_list: ["ai"],
        user: { name: "b" },
      },
    ];
    const requests: string[] = [];
    vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
      requests.push(String(input));
      return jsonResponse(articles);
    });

    const result = await fetchDevtoData(since);

    expect(result.articles.map((article) => article.id)).toEqual([2]);
    expect(result.fetchSuccess).toBe(true);
    expect(requests).toHaveLength(5);
    expect(requests.every((url) => !url.includes("top=") && url.includes("per_page=30"))).toBe(true);
  });
});
