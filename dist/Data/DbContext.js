"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DbCollection_1 = require("./DbCollection");
var DbContext = /** @class */ (function () {
    function DbContext() {
        this._collections = [];
    }
    DbContext.prototype.add = function (domainType, collection) {
        this._collections.push(new DbCollection_1.DbCollection(domainType.name, collection));
    };
    DbContext.prototype.get = function () {
        var collections = this._collections.filter(function (col) {
            return col.domainTypeName ===
            ;
        });
        return collections[0];
    };
    return DbContext;
}());
exports.DbContext = DbContext;
