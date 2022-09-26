import { BookRepository } from '../repository/book-repository';

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
    console.log(`updating ${id}`);
    const saved = await this.findById(id);
    if (saved) {
      book.id = id;
      this.bookRepository.update(book);
      return book;
    }
    return null;
  }

  delete(id) {
    this.bookRepository.delete(id);
  }
}
