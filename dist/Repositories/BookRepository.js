"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("../App/models/Book");
var BookRepository = /** @class */ (function () {
    function BookRepository(dbContext) {
        this._key = Book_1.Book.name;
        this._dbContext = dbContext;
    }
    Object.defineProperty(BookRepository.prototype, "_collections", {
        get: function () {
            return this._dbContext.get(this._key);
        },
        enumerable: true,
        configurable: true
    });
    BookRepository.prototype.all = function () {
        return this._collections.findAll();
    };
    BookRepository.prototype.where = function (predicate) {
        return this._collections.find(predicate);
    };
    BookRepository.prototype.singleOrDefault = function (predicate) {
        return this._collections.find(predicate)[0];
    };
    BookRepository.prototype.add = function (book) {
        var newBook = this._collections.create(book);
        return newBook;
    };
    BookRepository.prototype.remove = function (book) {
        this._collections.delete(book);
        return true;
    };
    return BookRepository;
}());
exports.BookRepository = BookRepository;
