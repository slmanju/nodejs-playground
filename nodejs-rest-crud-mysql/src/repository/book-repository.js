import Book from './model/book-model.js';

class BookRepository {

  async findAll() {
    return await Book.findAll();
  }

  async findById(id) {
    return await Book.findByPk(id);
  }

  async save(book) {
    return await Book.create(book);
  }

  async update(book) {
    return await Book.update(book, {
      where: {
        id: book.id
      }
    });
  }

  async delete(bookId) {
    return await Book.destroy({
      where: {
        id: bookId
      }
    });
  }
}

export { BookRepository };
