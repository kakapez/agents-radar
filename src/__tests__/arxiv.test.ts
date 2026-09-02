import { afterEach, describe, expect, it, vi } from "vitest";
import { fetchArxivData } from "../arxiv.ts";

const entry = (published: string, id: string) =>
  `<entry><id>https://arxiv.org/abs/${id}</id><title>Paper ${id}</title><summary>Summary</summary><author><name>Author</name></author><published>${published}</published><updated>${published}</updated><category term="cs.AI"/><link rel="related" href="https://arxiv.org/pdf/${id}"/></entry>`;

const feed = (...entries: string[]) => `<feed>${entries.join("")}</feed>`;

describe("fetchArxivData", () => {
  afterEach(() => vi.restoreAllMocks());

  it("queries all categories with delays and filters invalid or old publication dates", async () => {
    const since = new Date("2026-08-26T00:00:00.000Z");
    const responses = [
      feed(entry(since.toISOString(), "at-cutoff"), entry("not-a-date", "malformed")),
      feed(entry("2026-08-25T23:59:59.000Z", "old")),
      feed(entry("2026-08-27T00:00:00.000Z", "new")),
    ];
    const urls: string[] = [];
    vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
      urls.push(String(input));
      return new Response(responses[urls.length - 1], { status: 200 });
    });
    const timeoutSpy = vi.spyOn(globalThis, "setTimeout").mockImplementation(((handler: TimerHandler) => {
      if (typeof handler === "function") handler();
      return 0 as unknown as ReturnType<typeof setTimeout>;
    }) as unknown as typeof setTimeout);

    const result = await fetchArxivData(since);

    expect(result.papers.map((paper) => paper.id)).toEqual([
      "https://arxiv.org/abs/new",
      "https://arxiv.org/abs/at-cutoff",
    ]);
    expect(urls.map((url) => new URL(url).searchParams.get("search_query"))).toEqual([
      "cat:cs.AI",
      "cat:cs.CL",
      "cat:cs.LG",
    ]);
    expect(urls.every((url) => new URL(url).searchParams.get("max_results") === "50")).toBe(true);
    expect(timeoutSpy).toHaveBeenCalledTimes(2);
    expect(timeoutSpy.mock.calls.map((call) => call[1])).toEqual([3000, 3000]);
  });
});
