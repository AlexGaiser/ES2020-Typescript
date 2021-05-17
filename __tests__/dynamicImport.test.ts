import dynamicImport from "../examples/dynamicImport";

describe("testing dynamicImport", () => {
  const __testObject__ = { a: { b: { c: 1 } } };

  test("should clone object", async () => {
    const res = await dynamicImport(true, __testObject__);
    expect(res === __testObject__).toBe(false);
  });

  test("should not clone object", async () => {
    const res = await dynamicImport(false, __testObject__);
    expect(res === __testObject__).toBe(true);
  });
});
