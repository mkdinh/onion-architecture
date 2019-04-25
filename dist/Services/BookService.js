"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookService = /** @class */ (function () {
    function BookService(bookRepo, logger) {
        this._bookRepo = bookRepo;
        this._logger = logger;
    }
    BookService.prototype.getBooks = function () {
        return this._bookRepo.all();
    };
    BookService.prototype.getBookById = function (id) {
        return this._bookRepo.singleOrDefault(function (b) { return b.id === id; });
    };
    BookService.prototype.addBook = function (Book) {
        try {
            var bookDb = this._bookRepo.add(Book);
            return bookDb.id;
        }
        catch (ex) {
            this._logger.error(ex.error);
            return false;
        }
    };
    return BookService;
}());
exports.BookService = BookService;
exports.default = BookService;
