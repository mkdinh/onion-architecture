"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../App/models/User");
var UserRepository = /** @class */ (function () {
    function UserRepository(dbContext) {
        this._key = User_1.User.name;
        console.log(this._key);
        this._dbContext = dbContext;
    }
    Object.defineProperty(UserRepository.prototype, "_collections", {
        get: function () {
            return this._dbContext.get(this._key);
        },
        enumerable: true,
        configurable: true
    });
    UserRepository.prototype.all = function () {
        return this._collections.findAll();
    };
    UserRepository.prototype.where = function (predicate) {
        return this._collections.find(predicate);
    };
    UserRepository.prototype.singleOrDefault = function (predicate) {
        return this._collections.find(predicate)[0];
    };
    UserRepository.prototype.add = function (user) {
        var newUser = this._collections.create(user);
        return newUser;
    };
    UserRepository.prototype.remove = function (user) {
        this._collections.delete(user);
        return true;
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
