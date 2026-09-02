import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { fetchRecentDiscussions, closeSupersededIssues } from "../github.ts";

// ---------------------------------------------------------------------------
// Test helpers
// ---------------------------------------------------------------------------

interface NodeOverrides {
  number?: number;
  updatedAt?: string;
  upvoteCount?: number;
  comments?: number;
  category?: { name: string } | null;
  author?: { login: string } | null;
  answer?: { id: string } | null;
  body?: string | null;
}

function makeNode(o: NodeOverrides = {}) {
  return {
    number: o.number ?? 1,
    title: "Discussion title",
    body: o.body === undefined ? "Discussion body" : o.body,
    createdAt: "2026-03-09T00:00:00Z",
    updatedAt: o.updatedAt ?? "2026-03-09T12:00:00Z",
    upvoteCount: o.upvoteCount ?? 3,
    url: `https://github.com/org/repo/discussions/${o.number ?? 1}`,
    answer: o.answer === undefined ? null : o.answer,
    category: o.category === undefined ? { name: "Ideas" } : o.category,
    author: o.author === undefined ? { login: "alice" } : o.author,
    comments: { totalCount: o.comments ?? 5 },
  };
}

function mockGraphql(pages: { nodes: unknown[]; hasNextPage?: boolean; endCursor?: string | null }[]) {
  let call = 0;
  return vi.spyOn(globalThis, "fetch").mockImplementation(() => {
    const page = pages[Math.min(call, pages.length - 1)];
    call++;
    return Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          data: {
            repository: {
              discussions: {
                pageInfo: {
                  hasNextPage: page?.hasNextPage ?? false,
                  endCursor: page?.endCursor ?? null,
                },
                nodes: page?.nodes ?? [],
              },
            },
          },
        }),
    } as Response);
  });
}

const SINCE = new Date("2026-03-09T00:00:00Z");

afterEach(() => {
  vi.restoreAllMocks();
});

// ---------------------------------------------------------------------------
// fetchRecentDiscussions
// ---------------------------------------------------------------------------

describe("fetchRecentDiscussions", () => {
  it("maps GraphQL nodes to GitHubDiscussion", async () => {
    mockGraphql([{ nodes: [makeNode()] }]);
    const result = await fetchRecentDiscussions("org/repo", SINCE);

    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      number: 1,
      title: "Discussion title",
      category: "Ideas",
      author: "alice",
      comments: 5,
      upvotes: 3,
      answered: false,
      html_url: "https://github.com/org/repo/discussions/1",
    });
  });

  it("marks threads with an accepted answer", async () => {
    mockGraphql([{ nodes: [makeNode({ answer: { id: "a1" } })] }]);
    const result = await fetchRecentDiscussions("org/repo", SINCE);
    expect(result[0]?.answered).toBe(true);
  });

  it("falls back for missing category and deleted authors", async () => {
    mockGraphql([{ nodes: [makeNode({ category: null, author: null })] }]);
    const result = await fetchRecentDiscussions("org/repo", SINCE);
    expect(result[0]?.category).toBe("General");
    expect(result[0]?.author).toBe("ghost");
  });

  it("drops nodes older than since", async () => {
    mockGraphql([
      {
        nodes: [
          makeNode({ number: 1, updatedAt: "2026-03-09T12:00:00Z" }),
          makeNode({ number: 2, updatedAt: "2026-03-01T00:00:00Z" }),
        ],
      },
    ]);
    const result = await fetchRecentDiscussions("org/repo", SINCE);
    expect(result.map((d) => d.number)).toEqual([1]);
  });

  it("stops paginating once a page ends before since", async () => {
    const spy = mockGraphql([
      {
        nodes: [makeNode({ number: 1 }), makeNode({ number: 2, updatedAt: "2026-03-01T00:00:00Z" })],
        hasNextPage: true,
        endCursor: "cursor1",
      },
      { nodes: [makeNode({ number: 3 })] },
    ]);
    const result = await fetchRecentDiscussions("org/repo", SINCE);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(result.map((d) => d.number)).toEqual([1]);
  });

  it("follows the cursor while pages stay within the window", async () => {
    const spy = mockGraphql([
      { nodes: [makeNode({ number: 1 })], hasNextPage: true, endCursor: "cursor1" },
      { nodes: [makeNode({ number: 2 })], hasNextPage: false },
    ]);
    const result = await fetchRecentDiscussions("org/repo", SINCE);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(result.map((d) => d.number)).toEqual([1, 2]);
    const secondBody = JSON.parse(String(spy.mock.calls[1]?.[1]?.body)) as { variables: { after: string } };
    expect(secondBody.variables.after).toBe("cursor1");
  });

  it("throws on GraphQL errors returned with HTTP 200", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ errors: [{ message: "Discussions disabled" }] }),
    } as Response);

    await expect(fetchRecentDiscussions("org/repo", SINCE)).rejects.toThrow("Discussions disabled");
  });

  it("throws on a non-OK HTTP response", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: false,
      status: 401,
      text: () => Promise.resolve("Bad credentials"),
    } as Response);

    await expect(fetchRecentDiscussions("org/repo", SINCE)).rejects.toThrow("401");
  });

  it("rejects a malformed repo slug", async () => {
    await expect(fetchRecentDiscussions("not-a-slug", SINCE)).rejects.toThrow("Invalid repo slug");
  });
});

// ---------------------------------------------------------------------------
// closeSupersededIssues
// ---------------------------------------------------------------------------

interface FakeIssue {
  number: number;
  created_at: string;
  labels?: string[];
  isPr?: boolean;
}

/**
 * Mock the issue list endpoint and record every issue number that gets PATCHed
 * closed. A single page is returned, which ends pagination (< 100 items).
 */
function mockIssues(issues: FakeIssue[]): { closed: number[] } {
  const closed: number[] = [];
  vi.spyOn(globalThis, "fetch").mockImplementation((input, init) => {
    const url = String(input);
    if (init?.method === "PATCH") {
      closed.push(Number(url.match(/\/issues\/(\d+)$/)?.[1]));
      return Promise.resolve({ ok: true } as Response);
    }
    return Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve(
          issues.map((i) => ({
            number: i.number,
            created_at: i.created_at,
            labels: (i.labels ?? ["digest"]).map((name) => ({ name })),
            ...(i.isPr ? { pull_request: { url: "x" } } : {}),
          })),
        ),
    } as Response);
  });
  return { closed };
}

describe("closeSupersededIssues", () => {
  const originalRepo = process.env["DIGEST_REPO"];

  beforeEach(() => {
    process.env["DIGEST_REPO"] = "owner/repo";
  });

  afterEach(() => {
    if (originalRepo === undefined) delete process.env["DIGEST_REPO"];
    else process.env["DIGEST_REPO"] = originalRepo;
  });

  it("keeps the newest CST day and closes everything older", async () => {
    const { closed } = mockIssues([
      { number: 1, created_at: "2026-08-25T23:10:00Z" },
      { number: 2, created_at: "2026-08-26T23:10:00Z" },
      { number: 3, created_at: "2026-08-27T23:10:00Z" },
    ]);

    // #3 was created at 23:10 UTC on 08-27, which is 07:10 CST on 08-28.
    expect(await closeSupersededIssues()).toBe(2);
    expect(closed.sort()).toEqual([1, 2]);
  });

  it("keeps every issue from the retained day, including a duplicate run", async () => {
    // A manual catch-up run at 01:29 UTC and the delayed cron at 04:14 UTC both
    // published on 2026-08-27 CST, matching the digests/2026-08-27 folder.
    const { closed } = mockIssues([
      { number: 1, created_at: "2026-08-25T23:10:00Z" },
      { number: 2, created_at: "2026-08-27T01:29:00Z" },
      { number: 3, created_at: "2026-08-27T04:14:00Z" },
    ]);

    expect(await closeSupersededIssues()).toBe(1);
    expect(closed).toEqual([1]);
  });

  it("never closes pull requests or issues a person opened", async () => {
    const { closed } = mockIssues([
      { number: 1, created_at: "2026-01-01T00:00:00Z", isPr: true },
      { number: 2, created_at: "2026-01-01T00:00:00Z", labels: ["bug"] },
      { number: 3, created_at: "2026-01-01T00:00:00Z", labels: [] },
      { number: 4, created_at: "2026-08-25T23:10:00Z" },
      { number: 5, created_at: "2026-08-27T23:10:00Z" },
    ]);

    expect(await closeSupersededIssues()).toBe(1);
    expect(closed).toEqual([4]);
  });

  it("closes discontinued rollup issues, which carry a legacy label", async () => {
    const { closed } = mockIssues([
      { number: 1, created_at: "2026-05-19T23:10:00Z", labels: ["weekly"] },
      { number: 2, created_at: "2026-08-27T23:10:00Z" },
    ]);

    expect(await closeSupersededIssues()).toBe(1);
    expect(closed).toEqual([1]);
  });

  it("closes nothing when only the newest day is open", async () => {
    const { closed } = mockIssues([
      { number: 1, created_at: "2026-08-27T23:10:00Z" },
      { number: 2, created_at: "2026-08-27T23:11:00Z" },
    ]);

    expect(await closeSupersededIssues()).toBe(0);
    expect(closed).toEqual([]);
  });

  it("is a no-op when DIGEST_REPO is unset", async () => {
    delete process.env["DIGEST_REPO"];
    const fetchSpy = vi.spyOn(globalThis, "fetch");

    expect(await closeSupersededIssues()).toBe(0);
    expect(fetchSpy).not.toHaveBeenCalled();
  });
});
