"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookRepository = /** @class */ (function () {
    function BookRepository(dbContext) {
        this._dbContext = dbContext;
    }
    BookRepository.prototype.all = function () {
        return this._dbContext.get().findAll();
    };
    BookRepository.prototype.where = function (predicate) {
        return this._dbContext.get().find(predicate);
    };
    BookRepository.prototype.singleOrDefault = function (predicate) {
        return this._dbContext.get().find(predicate)[0];
    };
    BookRepository.prototype.add = function (book) {
        var newBook = this._dbContext.get().create(book);
        return newBook;
    };
    BookRepository.prototype.remove = function (book) {
        this._dbContext.get().delete(book);
        return true;
    };
    return BookRepository;
}());
exports.BookRepository = BookRepository;
