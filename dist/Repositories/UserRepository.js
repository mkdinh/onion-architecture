"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRepository = /** @class */ (function () {
    function UserRepository(dbContext) {
        this._dbContext = dbContext;
    }
    UserRepository.prototype.all = function () {
        return this._dbContext.findAll();
    };
    UserRepository.prototype.where = function (predicate) {
        return this._dbContext.find(predicate);
    };
    UserRepository.prototype.add = function (user) {
        var userModel = this._dbContext.create(user);
        return userModel;
    };
    UserRepository.prototype.remove = function (id) {
        this._dbContext.delete(id);
        return true;
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
