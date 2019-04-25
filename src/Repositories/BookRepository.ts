import { IDbContext } from "../Data/IDbContext";
import { IRepository } from "../Services/IRepository";
import { Book } from "../App/models/Book";

export class BookRepository implements IRepository<Book> {
  private _dbContext: IDbContext;

  constructor(dbContext: IDbContext) {
    this._dbContext = dbContext;
  }

  all(): Book[] {
    return this._dbContext.get<Book>().findAll();
  }

  where(predicate: (u: Book) => boolean): Book[] {
    return this._dbContext.get<Book>().find(predicate);
  }

  singleOrDefault(predicate: (u: Book) => boolean): Book {
    return this._dbContext.get<Book>().find(predicate)[0];
  }

  add(book: Book): Book {
    const newBook = this._dbContext.get<Book>().create(book);
    return newBook;
  }

  remove(book: Book): boolean {
    this._dbContext.get<Book>().delete(book);
    return true;
  }
}
