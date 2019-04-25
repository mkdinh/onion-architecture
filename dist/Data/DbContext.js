"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DbContext = /** @class */ (function () {
    function DbContext() {
    }
    DbContext.prototype.add = function (key, collection) {
        this._collection[key] = collection;
    };
    DbContext.prototype.get = function (key) {
        return this._collection[key];
    };
    return DbContext;
}());
exports.DbContext = DbContext;
