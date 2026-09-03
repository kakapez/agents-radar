import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchLobstersData } from "../lobsters.ts";

function jsonResponse(data: unknown): Response {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

function story(id: string, createdAt: string, score: number) {
  return {
    short_id: id,
    title: `Story ${id}`,
    url: `https://example.com/${id}`,
    comments_url: `https://lobste.rs/s/${id}`,
    score,
    comment_count: 1,
    submitter_user: { username: "author" },
    created_at: createdAt,
    tags: ["ai"],
  };
}

describe("fetchLobstersData", () => {
  afterEach(() => vi.restoreAllMocks());

  it("includes the shared cutoff boundary and excludes older stories", async () => {
    const since = new Date("2026-08-26T00:00:00.000Z");
    const boundary = story("boundary", since.toISOString(), 10);
    const older = story("older", "2026-08-25T23:59:59.999Z", 20);

    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockImplementation(async () => jsonResponse([boundary, older]));

    const result = await fetchLobstersData(since);

    expect(result.fetchSuccess).toBe(true);
    expect(result.stories.map(({ title }) => title)).toEqual(["Story boundary"]);
    expect(fetchMock.mock.calls.map(([input]) => String(input))).toEqual([
      "https://lobste.rs/t/ai.json",
      "https://lobste.rs/t/ml.json",
    ]);
  });
});
