import { Book } from "./models/Book";

export interface IBookService {
  getBooks(): Book[];
  getBookById(id: number): Book;
}
