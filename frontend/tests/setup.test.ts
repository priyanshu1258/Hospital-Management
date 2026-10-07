import { describe, it, expect } from "vitest";

describe("Setup", () => {
  it("should pass a basic sanity check", () => {
    expect(1 + 1).toBe(2);
  });

  it("should have MediQueue environment ready", () => {
    expect(typeof process).toBe("object");
  });
});
