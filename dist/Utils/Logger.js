"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.error = function (str) {
        console.log('\u001b[31m', str, '\u001b[0m');
    };
    Logger.prototype.info = function (str) {
        console.log('\u001b[32m', str, '\u001b[0m');
    };
    Logger.prototype.warn = function (str) {
        console.log('\u001b[33m', str, '\u001b[0m');
    };
    return Logger;
}());
exports.default = Logger;
