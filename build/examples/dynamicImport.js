"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dynamicImport = async (shouldImport, object) => {
    if (shouldImport) {
        const { clone } = await Promise.resolve().then(() => require("./services/utils.service"));
        const obj = clone(object);
        return obj;
    }
    else {
        return object;
    }
};
exports.default = dynamicImport;
//# sourceMappingURL=dynamicImport.js.map