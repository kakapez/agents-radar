/**
 * Date and timing utilities used across the pipeline.
 */

const CST_OFFSET_MS = 8 * 60 * 60 * 1000;

/** Duration of the rolling seven-day digest window in milliseconds. */
export const WEEKLY_WINDOW_MS = 7 * 24 * 60 * 60 * 1000;

export interface WeeklyWindow {
  now: Date;
  since: Date;
  hfEnabled: true;
}

/** Build the shared seven-day source cutoff used by every digest run. */
export function createWeeklyWindow(now: Date): WeeklyWindow {
  return {
    now,
    since: new Date(now.getTime() - WEEKLY_WINDOW_MS),
    hfEnabled: true,
  };
}

/** Convert a Date to a CST (UTC+8) date string like "2026-03-11". */
export function toCstDateStr(date: Date): string {
  return new Date(date.getTime() + CST_OFFSET_MS).toISOString().slice(0, 10);
}

/** Return the Monday CST date that identifies the current weekly digest. */
export function toCstWeekStartDateStr(date: Date): string {
  const cstDate = new Date(`${toCstDateStr(date)}T00:00:00Z`);
  const daysSinceMonday = (cstDate.getUTCDay() + 6) % 7;
  cstDate.setUTCDate(cstDate.getUTCDate() - daysSinceMonday);
  return cstDate.toISOString().slice(0, 10);
}

/** Format a Date as a compact UTC string like "2026-03-11 00:00". */
export function toUtcStr(date: Date): string {
  return date.toISOString().slice(0, 16).replace("T", " ");
}

/** Promise-based delay. */
export function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

/** Day of week for a "YYYY-MM-DD" date string, 0 = Sunday. */
export function weekdayOf(dateStr: string): number {
  return new Date(`${dateStr}T00:00:00Z`).getUTCDay();
}
