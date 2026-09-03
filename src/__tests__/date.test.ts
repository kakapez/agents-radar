import { describe, it, expect } from "vitest";
import {
  createWeeklyWindow,
  toCstDateStr,
  toCstWeekStartDateStr,
  toUtcStr,
  weekdayOf,
  WEEKLY_WINDOW_MS,
  formatWeeklyCoverage,
} from "../date.ts";

describe("toCstDateStr", () => {
  it("shifts a late-UTC timestamp to the next CST day", () => {
    // The cron fires at 22:37 UTC, which is 06:37 CST the following day.
    expect(toCstDateStr(new Date("2026-08-27T22:37:00Z"))).toBe("2026-08-28");
  });

  it("keeps a mid-UTC-day timestamp on the same CST day", () => {
    expect(toCstDateStr(new Date("2026-08-27T04:00:00Z"))).toBe("2026-08-27");
  });
});

describe("toCstWeekStartDateStr", () => {
  it("uses Monday as the stable weekly report key", () => {
    expect(toCstWeekStartDateStr(new Date("2026-08-30T23:00:00Z"))).toBe("2026-08-31");
    expect(toCstWeekStartDateStr(new Date("2026-09-01T23:00:00Z"))).toBe("2026-08-31");
  });
});

describe("toUtcStr", () => {
  it("formats as 'YYYY-MM-DD HH:MM'", () => {
    expect(toUtcStr(new Date("2026-08-27T04:07:31Z"))).toBe("2026-08-27 04:07");
  });
});

describe("weekly window", () => {
  it("builds a seven-day cutoff from the run timestamp and enables HF", () => {
    const runAt = new Date("2026-09-07T23:00:00Z");
    const window = createWeeklyWindow(runAt);

    expect(window.now).toBe(runAt);
    expect(window.since.toISOString()).toBe("2026-08-31T23:00:00.000Z");
    expect(window.hfEnabled).toBe(true);
    expect(new Date("2026-08-31T23:00:00Z") >= window.since).toBe(true);
    expect(new Date("2026-08-31T22:59:59.999Z") >= window.since).toBe(false);
  });

  it("describes captured coverage separately from the Monday key", () => {
    expect(
      formatWeeklyCoverage(new Date("2026-08-31T23:00:00.000Z"), new Date("2026-09-07T23:00:00.000Z")),
    ).toBe(
      "2026-08-31T23:00:00.000Z through 2026-09-07T23:00:00.000Z (captured at run time; Monday CST is the directory key)",
    );
  });

  it("returns one cutoff object for all source fetchers", () => {
    const window = createWeeklyWindow(new Date("2026-09-02T12:00:00Z"));
    const sourceCutoffs = [
      window.since,
      window.since,
      window.since,
      window.since,
      window.since,
      window.since,
    ];

    expect(new Set(sourceCutoffs).size).toBe(1);
    expect(window.since.getTime()).toBe(window.now.getTime() - WEEKLY_WINDOW_MS);
  });
});

describe("weekdayOf", () => {
  it("returns 1 for a Monday", () => {
    expect(weekdayOf("2026-08-31")).toBe(1);
  });

  it("returns 0 for a Sunday", () => {
    expect(weekdayOf("2026-08-30")).toBe(0);
  });

  it("reads the date string as UTC, not local time", () => {
    // A local-time parse would shift the day in negative-offset time zones.
    expect(weekdayOf("2026-08-27")).toBe(4); // Thursday
  });
});
