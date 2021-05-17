import stringMatchall from "../examples/stringMatchall";

describe("testing stringMatchall", () => {
  test("should return [a,b,c]", () => {
    const matches = [...stringMatchall("abc", /[a-c]/g)];
    const matchArr = matches.map((arr) => arr[0]);
    expect(matchArr).toStrictEqual(["a", "b", "c"]);
  });
});
