"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = exports.clone = void 0;
const clone = (target, map = new WeakMap()) => {
    if (typeof target === "object") {
        const cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        for (const key in target) {
            cloneTarget[key] = exports.clone(target[key], map);
        }
        return cloneTarget;
    }
    else {
        return target;
    }
};
exports.clone = clone;
const pipe = (...args) => (x) => args.reduce((v, f) => f(v), x);
exports.pipe = pipe;
//# sourceMappingURL=utils.service.js.map