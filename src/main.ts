import { App } from "./App";
import Logger from "./Utils/Logger";
import { UserService, BookService } from "./Services";
import { UserRepository, BookRepository } from "./Repositories";

import { DbContext } from "./Data/DbContext";
import { Book, User } from "./App/models";

import userData from "./assets/users.json";
import bookData from "./assets/books.json";

const logger = new Logger();
const dbContext = new DbContext();

dbContext.add<User>(User, userData);
dbContext.add<Book>(Book, bookData);

const userRepo = new UserRepository(dbContext);
const userService = new UserService(userRepo, logger);

const bookRepo = new BookRepository(dbContext);
const bookService = new BookService(bookRepo, logger);

const app = new App(userService, bookService, logger);

app.main();
