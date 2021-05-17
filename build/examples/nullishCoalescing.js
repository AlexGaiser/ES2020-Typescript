"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nullWithString = exports.NaNWithString = exports.falseWithString = exports.undefinedWithString = void 0;
var undefinedWithString = function (str) {
    return undefined !== null && undefined !== void 0 ? undefined : str;
};
exports.undefinedWithString = undefinedWithString;
var falseWithString = function (str) {
    return false !== null && false !== void 0 ? false : str;
};
exports.falseWithString = falseWithString;
var NaNWithString = function (str) {
    return NaN !== null && NaN !== void 0 ? NaN : str;
};
exports.NaNWithString = NaNWithString;
var nullWithString = function (str) {
    return null !== null && null !== void 0 ? null : str;
};
exports.nullWithString = nullWithString;
//# sourceMappingURL=nullishCoalescing.js.map