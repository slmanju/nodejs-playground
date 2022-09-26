import Book from './models/book-model';

export class BookRepository {

  async findAll() {
    try {
      console.log('finding all');
      return await Book.findAll();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async findById(id) {
    try {
      console.log(`find by id ${id}`);
      return await Book.findAll({
        where: {
          id: id
        }
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async save(book) {
    try {
      console.log('saving book');
      return await Book.create(book);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async update(book) {
    try {
      console.log('updating book');
      return await Book.update(book, {
        where: {
          id: book.id
        }
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async delete(bookId) {
    try {
      console.log('deleting book');
      return await Book.destroy({
        where: {
          id: bookId
        }
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

