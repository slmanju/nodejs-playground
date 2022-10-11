import { BookService } from '../service/book-service.js';

class BookController {
  constructor() {
    this.bookService = new BookService();
  }

  async findAll(req, res) {
    const books = await this.bookService.findAll();
    if (books) {
      res.json(books);
    } else {
      res.status(500).json({ message: 'something terrible happened' });
    }
  }

  async findById(req, res) {
    const id = req.params.id;
    const book = await this.bookService.findById(id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: `book not found for id ${id}` });
    }
  }

  async save(req, res) {
    const book = await this.bookService.save(req.body);
    if (book) {
      res.json(book);
    } else {
      res.status(500).json({ message: 'something terrible happened' });
    }
  }

  async update(req, res) {
    const id = req.params.id;
    const book = await this.bookService.update(id, req.body);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: `book not found for id ${id}` });
    }
  }

  async delete(req, res) {
    await this.bookService.delete(req.params.id);
    res.status(204).json({ message: 'Book removed' });
  }
}

export { BookController };
