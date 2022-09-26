import { BookService } from '../services/book-service';

export class BookController {
  constructor() {
    this.bookService = new BookService();
  }

  findAll(req, res) {
    bookService.findAll()
      .then(books => res.json(books))
      .catch(err => res.status(500).json({ message: 'something terrible happened' }));
  }

  findById(req, res) {
    const id = req.params.id;
    bookService.findById(id)
      .then(book => res.json(book))
      .catch(err => res.status(404).json({ message: `book not found for id ${id}`}));
  }

  save(req, res) {
    bookService.save(req.body)
    .then(book => res.json(book))
    .catch(err => res.status(500).json({ message: 'something terrible happened' }));
  }

  update(req, res) {
    bookService.update(req.params.id, req.body)
    .then(book => res.json(book))
    .catch(err => res.status(500).json({ message: 'something terrible happened' }));
  }

  delete(req, res) {
    bookService.delete(req.params.id);
    res.status(204).json({ message: 'Book removed' });
  }
}
