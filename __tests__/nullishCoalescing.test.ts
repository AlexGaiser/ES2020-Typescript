import {
  falseWithString,
  nullWithString,
  undefinedWithString,
} from "../examples/nullishCoalescing";

describe("testing nullishCoalescing", () => {
  test("should be falsy with str", () => {
    expect("").toBeFalsy();
  });

  test("should be false", () => {
    expect(false || "").toBe("");
  });

  test("should be falsy with 0", () => {
    expect(0).toBeFalsy();
  });

  test("should return false", () => {
    expect(falseWithString("")).toBe(false);
  });

  test("should return str", () => {
    expect(undefinedWithString("")).toBe("");
  });
  test("should return str", () => {
    expect(null ?? "str").toBe("str");
  });

  test("should be true with nullish", () => {
    expect(nullWithString("")).toBe("");
  });
});
