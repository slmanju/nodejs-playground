import { BookRepository } from '../repository/book-repository.js';

export class BookService {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  findAll() {
    return this.bookRepository.findAll();
  }

  findById(id) {
    return this.bookRepository.findById(id);
  }

  save(book) {
    return this.bookRepository.save(book);
  }

  async update(id, book) {
    const saved = await this.findById(id);
    if (saved !== null) {
      book.id = id;
      this.bookRepository.update(book);
      return book;
    } else {
      return null;
    }
  }

  delete(id) {
    this.bookRepository.delete(id);
  }
}
