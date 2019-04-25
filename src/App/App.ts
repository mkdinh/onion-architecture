import { IUserService } from "./IUserService";
import { IBookService } from "./IBookService";
import { Status, Condition } from "./enums";
import { ILogger } from "../Utils/ILogger";
import { User } from "./models/User";
import { Book } from "./models";

export class App {
  private _userService: IUserService;
  private _bookService: IBookService;
  private _logger: ILogger;

  constructor(
    userService: IUserService,
    bookService: IBookService,
    logger: ILogger
  ) {
    this._userService = userService;
    this._bookService = bookService;
    this._logger = logger;
  }

  main() {
    this.logUsers();
    this.logBooks();
  }

  public logUsers() {
    const users = this._userService.getUsers();
    users.forEach((u: User) => {
      const userInfo = `${u.id}. ${u.name} (${u.age})`;
      switch (u.status) {
        case Status.Active:
          this._logger.info(userInfo);
          break;

        case Status.Inactive:
          this._logger.warn(userInfo);
          break;

        case Status.Expired:
          this._logger.error(userInfo);
          break;
        default:
          this._logger.info(`${u.name} has no valid status.`);
      }
    });
  }

  public logBooks() {
    const books = this._bookService.getBooks();

    books.forEach((b: Book) => {
      const bookInfo = `${b.id}. ${b.title} (${b.condition})`;
      switch (b.condition) {
        case Condition.New:
          this._logger.info(bookInfo);
          break;

        case Condition.Old:
          this._logger.warn(bookInfo);
          break;

        case Condition.Ancient:
          this._logger.error(bookInfo);
          break;
        default:
          this._logger.info(`${b.title} has no valid status.`);
      }
    });
  }
}
