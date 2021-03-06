"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DbCollection = /** @class */ (function () {
    function DbCollection(key, entities) {
        this.key = key;
        this._entities = entities;
    }
    DbCollection.prototype.findAll = function () {
        return this._entities;
    };
    DbCollection.prototype.find = function (predicate) {
        return this.findAll().filter(predicate);
    };
    DbCollection.prototype.create = function (entity) {
        this._entities.push(entity);
        return entity;
    };
    DbCollection.prototype.delete = function (entity) {
        this._entities = this.findAll().filter(function (x) { return x === entity; });
        return true;
    };
    return DbCollection;
}());
exports.DbCollection = DbCollection;
