import { sumBigInt } from "../examples/bigInt";

describe("BigInt Tests", () => {
  test("should return 10", () => {
    expect(sumBigInt(BigInt(5), BigInt(5))).toStrictEqual(BigInt(10));
  });
});
