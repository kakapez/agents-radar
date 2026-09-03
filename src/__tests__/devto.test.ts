import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchDevtoData } from "../devto.ts";

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
}

function article(id: number, publishedAt: string, reactions = id) {
  return {
    id,
    title: `Article ${id}`,
    description: "",
    url: `https://dev.to/article-${id}`,
    published_at: publishedAt,
    positive_reactions_count: reactions,
    comments_count: 1,
    reading_time_minutes: 1,
    tag_list: ["ai"],
    user: { name: "author" },
  };
}

describe("fetchDevtoData", () => {
  afterEach(() => vi.restoreAllMocks());

  it("continues past a mixed page so later in-window articles are not missed", async () => {
    const since = new Date("2026-08-26T00:00:00.000Z");
    const firstPage = Array.from({ length: 30 }, (_, index) =>
      article(index + 1, "2026-08-27T00:00:00.000Z"),
    );
    const secondPage = [
      article(32, "2026-08-25T23:59:59.000Z", 2_000),
      article(31, since.toISOString(), 1_000),
      ...Array.from({ length: 28 }, (_, index) => article(index + 33, "2026-08-27T00:00:00.000Z")),
    ];
    const thirdPage = Array.from({ length: 30 }, (_, index) =>
      article(index + 100, "2026-08-25T23:59:59.000Z"),
    );
    const requests: string[] = [];
    vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
      const url = String(input);
      requests.push(url);
      const page = new URL(url).searchParams.get("page");
      return jsonResponse(page === "1" ? firstPage : page === "2" ? secondPage : thirdPage);
    });

    const result = await fetchDevtoData(since);

    expect(result.fetchSuccess).toBe(true);
    expect(result.articles).toHaveLength(30);
    expect(result.articles.some(({ id }) => id === 31)).toBe(true);
    expect(result.articles.some(({ id }) => id === 32)).toBe(false);
    expect(requests).toHaveLength(15);
    expect(requests.every((url) => !url.includes("top=") && url.includes("per_page=30"))).toBe(true);
    expect(requests.filter((url) => new URL(url).searchParams.get("page") === "2")).toHaveLength(5);
    expect(requests.filter((url) => new URL(url).searchParams.get("page") === "3")).toHaveLength(5);
  });
});
