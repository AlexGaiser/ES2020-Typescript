"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dotNotation = exports.optionChaining = void 0;
const optionChaining = (obj) => {
    return obj?.a?.b?.c?.d;
};
exports.optionChaining = optionChaining;
const dotNotation = (obj) => {
    return obj.a.b.c.d;
};
exports.dotNotation = dotNotation;
//# sourceMappingURL=optionChaining.js.map