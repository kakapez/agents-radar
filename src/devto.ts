/**
 * Dev.to AI articles fetched via the Forem API.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface DevtoArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  positiveReactionsCount: number;
  commentsCount: number;
  readingTimeMinutes: number;
  tags: string[];
  user: string;
}

export interface DevtoData {
  articles: DevtoArticle[];
  fetchSuccess: boolean;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const DEVTO_PER_PAGE = 30;
const API_URL = "https://dev.to/api/articles";

/** Tags to query — run in parallel, dedup by id. */
const TAGS = ["ai", "llm", "machinelearning", "openai", "langchain"];

// ---------------------------------------------------------------------------
// Response type
// ---------------------------------------------------------------------------

interface DevtoApiArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  positive_reactions_count: number;
  comments_count: number;
  reading_time_minutes: number;
  tag_list: string[];
  user: { name: string };
}

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

export async function fetchDevtoData(since: Date): Promise<DevtoData> {
  const seen = new Map<number, DevtoArticle>();

  try {
    await Promise.all(
      TAGS.map(async (tag) => {
        try {
          for (let page = 1; ; page += 1) {
            const params = new URLSearchParams({
              tag,
              per_page: String(DEVTO_PER_PAGE),
              page: String(page),
            });

            const resp = await fetch(`${API_URL}?${params}`, {
              headers: { "User-Agent": "agents-radar/1.0" },
            });

            if (!resp.ok) {
              console.error(`  [devto] "${tag}" page ${page}: HTTP ${resp.status}`);
              return;
            }

            const raw = (await resp.json()) as DevtoApiArticle[];
            let reachedCutoff = false;
            for (const a of raw) {
              const publishedAt = new Date(a.published_at).getTime();
              if (!Number.isFinite(publishedAt)) continue;
              if (publishedAt < since.getTime()) {
                reachedCutoff = true;
                continue;
              }
              if (!seen.has(a.id)) {
                seen.set(a.id, {
                  id: a.id,
                  title: a.title,
                  description: a.description,
                  url: a.url,
                  publishedAt: a.published_at,
                  positiveReactionsCount: a.positive_reactions_count,
                  commentsCount: a.comments_count,
                  readingTimeMinutes: a.reading_time_minutes,
                  tags: a.tag_list,
                  user: a.user.name,
                });
              }
            }

            if (raw.length < DEVTO_PER_PAGE || reachedCutoff) break;
          }
        } catch (err) {
          console.error(`  [devto] "${tag}": ${err}`);
        }
      }),
    );

    const articles = [...seen.values()]
      .sort((a, b) => b.positiveReactionsCount - a.positiveReactionsCount)
      .slice(0, DEVTO_PER_PAGE);

    console.log(`  [devto] ${articles.length} articles (from ${seen.size} unique)`);
    return { articles, fetchSuccess: articles.length > 0 };
  } catch (err) {
    console.error(`  [devto] fetch failed: ${err}`);
    return { articles: [], fetchSuccess: false };
  }
}
