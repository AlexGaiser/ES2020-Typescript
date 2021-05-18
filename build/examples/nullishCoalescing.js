"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nullWithString = exports.NaNWithString = exports.falseWithString = exports.undefinedWithString = void 0;
const undefinedWithString = (str) => {
    return undefined ?? str;
};
exports.undefinedWithString = undefinedWithString;
const falseWithString = (str) => {
    return false ?? str;
};
exports.falseWithString = falseWithString;
const NaNWithString = (str) => {
    return NaN ?? str;
};
exports.NaNWithString = NaNWithString;
const nullWithString = (str) => {
    return null ?? str;
};
exports.nullWithString = nullWithString;
//# sourceMappingURL=nullishCoalescing.js.map