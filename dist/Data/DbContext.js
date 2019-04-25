"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DbCollection_1 = require("./DbCollection");
var DbContext = /** @class */ (function () {
    function DbContext() {
    }
    DbContext.prototype.add = function (key, collection) {
        this[key] = new DbCollection_1.DbCollection(key, collection);
    };
    DbContext.prototype.get = function (key) {
        return this[key];
    };
    return DbContext;
}());
exports.DbContext = DbContext;
