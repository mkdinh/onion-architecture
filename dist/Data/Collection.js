"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collection = /** @class */ (function () {
    function Collection() {
    }
    Collection.prototype.findAll = function () {
        return this._data;
    };
    Collection.prototype.find = function (predicate) {
        return this._data.filter(predicate);
    };
    Collection.prototype.create = function (data) {
        this._data.push(data);
    };
    Collection.prototype.delete = function (id) {
        this._data = this._data.filter(function (x) { return x.id !== id; });
        return true;
    };
    return Collection;
}());
exports.Collection = Collection;
