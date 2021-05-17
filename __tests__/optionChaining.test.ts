import { optionChaining, dotNotation } from "../examples/optionChaining";

describe("testing optionChaining", () => {
  const __testobj__ = { a: 1, b: 2 };
  test("should be undefined", () => {
    expect(optionChaining(__testobj__)).toBeUndefined();
  });

  test("should throw error", () => {
    expect(() => {
      try {
        dotNotation(__testobj__);
      } catch (e) {
        throw new Error("failed to retrieve");
      }
    }).toThrowError("failed to retrieve");
  });
});
