"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DbCollection = /** @class */ (function () {
    function DbCollection(data) {
        this._data = data;
    }
    DbCollection.prototype.findAll = function () {
        return this._data;
    };
    DbCollection.prototype.find = function (predicate) {
        return this._data.filter(predicate);
    };
    DbCollection.prototype.create = function (data) {
        this._data.push(data);
        return data;
    };
    DbCollection.prototype.delete = function (id) {
        this._data = this._data.filter(function (x) { return x.id !== id; });
        return true;
    };
    return DbCollection;
}());
exports.DbCollection = DbCollection;
