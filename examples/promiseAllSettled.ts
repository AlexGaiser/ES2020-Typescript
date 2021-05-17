export const promiseAllSettled = <T>(promises: Promise<T>[]) => {
  return Promise.allSettled(promises);
};

export const promiseAll = <T>(promises: Promise<T>[]) => {
  return Promise.all(promises);
};
