"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumbers = void 0;
const timeout = (n) => {
    return new Promise(res => setTimeout(res, n));
};
exports.addNumbers = async (a, b) => {
    await timeout(2000);
    return a + b;
};
(async () => {
    console.log(await exports.addNumbers(1, 2));
})();
//# sourceMappingURL=index.js.map