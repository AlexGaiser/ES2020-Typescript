"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseAll = exports.promiseAllSettled = void 0;
const promiseAllSettled = (promises) => {
    return Promise.allSettled(promises);
};
exports.promiseAllSettled = promiseAllSettled;
const promiseAll = (promises) => {
    return Promise.all(promises);
};
exports.promiseAll = promiseAll;
const __testPromises__ = [
    Promise.resolve("out"),
    Promise.reject(new Error("failed promise")),
];
console.log(exports.promiseAllSettled(__testPromises__));
//# sourceMappingURL=promiseAllSettled.js.map