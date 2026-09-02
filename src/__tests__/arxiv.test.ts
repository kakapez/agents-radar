import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchArxivData } from "../arxiv.ts";

const xml = (published: string, id: string) =>
  `<feed><entry><id>https://arxiv.org/abs/${id}</id><title>Paper ${id}</title><summary>Summary</summary><author><name>Author</name></author><published>${published}</published><updated>${published}</updated><category term="cs.AI"/><link rel="related" href="https://arxiv.org/pdf/${id}"/></entry></feed>`;

describe("fetchArxivData", () => {
  afterEach(() => vi.restoreAllMocks());

  it("includes papers at since and excludes older papers across categories", async () => {
    const since = new Date("2026-08-26T00:00:00.000Z");
    const responses = [
      xml(since.toISOString(), "new"),
      xml("2026-08-25T23:59:59.000Z", "old"),
      xml(since.toISOString(), "new"),
    ];
    const urls: string[] = [];
    vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
      urls.push(String(input));
      return new Response(responses[urls.length - 1], { status: 200 });
    });
    vi.spyOn(globalThis, "setTimeout").mockImplementation(((handler: TimerHandler) => {
      if (typeof handler === "function") handler();
      return 0 as unknown as ReturnType<typeof setTimeout>;
    }) as unknown as typeof setTimeout);

    const result = await fetchArxivData(since);

    expect(result.papers.map((paper) => paper.id)).toEqual(["https://arxiv.org/abs/new"]);
    expect(urls).toHaveLength(3);
    expect(urls.every((url) => url.includes("max_results=50"))).toBe(true);
  });
});
