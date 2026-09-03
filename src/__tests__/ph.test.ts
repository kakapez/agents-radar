import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchPhData } from "../ph.ts";

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
}

describe("fetchPhData", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    delete process.env["PRODUCTHUNT_TOKEN"];
  });

  it("queries the requested window and keeps AI topics", async () => {
    process.env["PRODUCTHUNT_TOKEN"] = "test-token";
    const since = new Date("2026-08-26T00:00:00.000Z");
    const until = new Date("2026-09-02T00:00:00.000Z");
    const body = {
      data: {
        posts: {
          edges: [
            {
              node: {
                id: "old",
                name: "Old",
                tagline: "",
                url: "https://ph.test/old",
                website: "",
                votesCount: 100,
                commentsCount: 1,
                createdAt: "2026-08-25T23:59:59.000Z",
                topics: { edges: [{ node: { slug: "ai", name: "AI" } }] },
              },
            },
            {
              node: {
                id: "new",
                name: "New",
                tagline: "",
                url: "https://ph.test/new",
                website: "",
                votesCount: 5,
                commentsCount: 1,
                createdAt: since.toISOString(),
                topics: { edges: [{ node: { slug: "ai", name: "AI" } }] },
              },
            },
          ],
        },
      },
    };
    let request: { variables?: { postedAfter?: string; postedBefore?: string } } = {};
    vi.spyOn(globalThis, "fetch").mockImplementation(async (_input, init) => {
      request = JSON.parse(String(init?.body)) as typeof request;
      return jsonResponse(body);
    });

    const result = await fetchPhData(since, until);

    expect(result.products.map((product) => product.id)).toEqual(["new"]);
    expect(request.variables?.postedAfter).toBe(since.toISOString());
    expect(request.variables?.postedBefore).toBe(until.toISOString());
  });
});
