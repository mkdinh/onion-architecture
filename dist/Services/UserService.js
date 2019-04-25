"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserService = /** @class */ (function () {
    function UserService(userRepo, logger) {
        this._userRepo = userRepo;
        this._logger = logger;
    }
    UserService.prototype.getUsers = function () {
        return this._userRepo.all();
    };
    UserService.prototype.getUserById = function (id) {
        return this._userRepo.singleOrDefault(function (u) { return u.id === id; });
    };
    UserService.prototype.addUser = function (user) {
        try {
            var userDb = this._userRepo.add(user);
            return userDb.id;
        }
        catch (ex) {
            this._logger.error(ex.error);
            return false;
        }
    };
    return UserService;
}());
exports.UserService = UserService;
exports.default = UserService;
