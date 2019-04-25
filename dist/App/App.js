"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var App = /** @class */ (function () {
    function App(userService, bookService, logger) {
        this._userService = userService;
        this._bookService = bookService;
        this._logger = logger;
    }
    App.prototype.main = function () {
        this.logUsers();
        this.logBooks();
    };
    App.prototype.logUsers = function () {
        var _this = this;
        var users = this._userService.getUsers();
        users.forEach(function (u) {
            var userInfo = u.id + ". " + u.name + " (" + u.age + ")";
            switch (u.status) {
                case enums_1.Status.Active:
                    _this._logger.info(userInfo);
                    break;
                case enums_1.Status.Inactive:
                    _this._logger.warn(userInfo);
                    break;
                case enums_1.Status.Expired:
                    _this._logger.error(userInfo);
                    break;
                default:
                    _this._logger.info(u.name + " has no valid status.");
            }
        });
    };
    App.prototype.logBooks = function () {
        var _this = this;
        var books = this._bookService.getBooks();
        books.forEach(function (b) {
            var bookInfo = b.id + ". " + b.title + " (" + b.condition + ")";
            switch (b.condition) {
                case enums_1.Condition.New:
                    _this._logger.info(bookInfo);
                    break;
                case enums_1.Condition.Old:
                    _this._logger.warn(bookInfo);
                    break;
                case enums_1.Condition.Ancient:
                    _this._logger.error(bookInfo);
                    break;
                default:
                    _this._logger.info(b.title + " has no valid status.");
            }
        });
    };
    return App;
}());
exports.App = App;
