import { IBookService } from "../App/IBookService";
import { Book } from "../App/models/Book";
import { ILogger } from "../Utils/ILogger";
import { BookRepository } from "../Repositories/BookRepository";

export class BookService implements IBookService {
  private _bookRepo: BookRepository;
  private _logger: ILogger;

  constructor(bookRepo: BookRepository, logger: ILogger) {
    this._bookRepo = bookRepo;
    this._logger = logger;
  }

  public getBooks(): Book[] {
    return this._bookRepo.all();
  }

  public getBookById(id: number): Book {
    return this._bookRepo.singleOrDefault((b: Book) => b.id === id);
  }

  public addBook(Book: Book) {
    try {
      const bookDb = this._bookRepo.add(Book);
      return bookDb.id;
    } catch (ex) {
      this._logger.error(ex.error);
      return false;
    }
  }
}

export default BookService;
