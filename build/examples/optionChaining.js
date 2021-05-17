"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dotNotation = exports.optionChaining = void 0;
var optionChaining = function (obj) {
    var _a, _b, _c;
    return (_c = (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.a) === null || _a === void 0 ? void 0 : _a.b) === null || _b === void 0 ? void 0 : _b.c) === null || _c === void 0 ? void 0 : _c.d;
};
exports.optionChaining = optionChaining;
var dotNotation = function (obj) {
    return obj.a.b.c.d;
};
exports.dotNotation = dotNotation;
var __testobj__ = { a: 1, b: 2 };
console.log(exports.optionChaining(__testobj__));
