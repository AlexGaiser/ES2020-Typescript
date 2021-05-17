import { promiseAllSettled, promiseAll } from "../examples/promiseAllSettled";

describe("testing promiseAllSettled", () => {
  const __testPromises__ = [
    Promise.resolve("out"),
    Promise.reject(new Error("failed promise")),
  ];

  test("promise all settled", async () => {
    const res = await promiseAllSettled(__testPromises__);
    expect(res[0].status).toBe("fulfilled");
    expect(res[1].status).toBe("rejected");
  });
  test("promise all", async () => {
    await expect(promiseAll(__testPromises__)).rejects.toThrowError();
  });
});
