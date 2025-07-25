import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// No jest-dom matchers for now

// Run cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

// Mock window and document objects if they don't exist
if (typeof window === "undefined") {
  global.window = {} as Window & typeof globalThis;
}

if (typeof document === "undefined") {
  global.document = {
    createElement: vi.fn(),
    querySelector: vi.fn(),
  } as unknown as Document;
}
