class BookRepository {
  constructor() {
    this.books = [
      { id: 1, title: 'Clean Code', author: 'Uncle Bob'}
    ];
  }

  async findAll() {
    try {
      console.log('finding all');
      return Promise.resolve(this.books);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async findById(id) {
    try {
      console.log(`find by id ${id}`);
      return Promise.resolve(this.books[0]);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async save(book) {
    try {
      console.log('saving book');
      book.id = new Date().getMilliseconds();
      this.books.push(book);
      return Promise.resolve(book);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async update(book) {
    // TODO
  }

  async delete(bookId) {
    // TODO
  }
}

export default BookRepository;