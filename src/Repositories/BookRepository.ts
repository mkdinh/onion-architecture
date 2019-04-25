import { IDbContext } from "../Data/IDbContext";
import { IDbCollection } from "../Data/IDbCollection";
import { IRepository } from "../Services/IRepository";
import { Book } from "../App/models/Book";

export class BookRepository implements IRepository<Book> {
  public _key: string = (Book as any).name;
  private _dbContext: IDbContext;

  constructor(dbContext: IDbContext) {
    this._dbContext = dbContext;
  }

  private get _collections(): IDbCollection<Book> {
    return this._dbContext.get<Book>(this._key);
  }

  all(): Book[] {
    return this._collections.findAll();
  }

  where(predicate: (u: Book) => boolean): Book[] {
    return this._collections.find(predicate);
  }

  singleOrDefault(predicate: (u: Book) => boolean): Book {
    return this._collections.find(predicate)[0];
  }

  add(book: Book): Book {
    const newBook = this._collections.create(book);
    return newBook;
  }

  remove(book: Book): boolean {
    this._collections.delete(book);
    return true;
  }
}
