"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRepository = /** @class */ (function () {
    function UserRepository(dbContext) {
        this._dbContext = dbContext;
    }
    UserRepository.prototype.all = function () {
        return this._dbContext.get().findAll();
    };
    UserRepository.prototype.where = function (predicate) {
        return this._dbContext.get().find(predicate);
    };
    UserRepository.prototype.singleOrDefault = function (predicate) {
        return this._dbContext.get().find(predicate)[0];
    };
    UserRepository.prototype.add = function (user) {
        var newUser = this._dbContext.get().create(user);
        return newUser;
    };
    UserRepository.prototype.remove = function (user) {
        this._dbContext.get().delete(user);
        return true;
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
