export const promiseAllSettled = <T>(promises: Promise<T>[]) => {
  return Promise.allSettled(promises);
};

export const promiseAll = <T>(promises: Promise<T>[]) => {
  return Promise.all(promises);
};

const __testPromises__ = [
  Promise.resolve("out"),
  Promise.reject(new Error("failed promise")),
];

console.log(promiseAllSettled(__testPromises__));
