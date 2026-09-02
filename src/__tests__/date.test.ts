import { describe, it, expect } from "vitest";
import { toCstDateStr, toUtcStr, weekdayOf } from "../date.ts";

describe("toCstDateStr", () => {
  it("shifts a late-UTC timestamp to the next CST day", () => {
    // The cron fires at 22:37 UTC, which is 06:37 CST the following day.
    expect(toCstDateStr(new Date("2026-08-27T22:37:00Z"))).toBe("2026-08-28");
  });

  it("keeps a mid-UTC-day timestamp on the same CST day", () => {
    expect(toCstDateStr(new Date("2026-08-27T04:00:00Z"))).toBe("2026-08-27");
  });
});

describe("toUtcStr", () => {
  it("formats as 'YYYY-MM-DD HH:MM'", () => {
    expect(toUtcStr(new Date("2026-08-27T04:07:31Z"))).toBe("2026-08-27 04:07");
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
