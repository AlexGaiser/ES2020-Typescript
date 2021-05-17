"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseAll = exports.promiseAllSettled = void 0;
var promiseAllSettled = function (promises) {
    return Promise.allSettled(promises);
};
exports.promiseAllSettled = promiseAllSettled;
var promiseAll = function (promises) {
    return Promise.all(promises);
};
exports.promiseAll = promiseAll;
//# sourceMappingURL=promiseAllSettled.js.map