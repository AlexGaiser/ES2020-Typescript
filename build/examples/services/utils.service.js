"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = exports.clone = void 0;
var clone = function (target, map) {
    if (map === void 0) { map = new WeakMap(); }
    if (typeof target === "object") {
        var cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        for (var key in target) {
            cloneTarget[key] = exports.clone(target[key], map);
        }
        return cloneTarget;
    }
    else {
        return target;
    }
};
exports.clone = clone;
var pipe = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (x) {
        return args.reduce(function (v, f) { return f(v); }, x);
    };
};
exports.pipe = pipe;
//# sourceMappingURL=utils.service.js.map