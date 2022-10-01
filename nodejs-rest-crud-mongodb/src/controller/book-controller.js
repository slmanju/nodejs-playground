import BookService from '../service/book-service.js';

class BookController {
  constructor() {
    this.bookService = new BookService();
  }

  findAll(req, res) {
    return this.bookService.findAll()
      .then(books => res.json(books))
      .catch(err => res.status(500).json({ message: 'something terrible happened' }));
  }

  findById(req, res) {
    const id = req.params.id;
    this.bookService.findById(id)
      .then(book => res.json(book))
      .catch(err => res.status(404).json({ message: `book not found for id ${id}`}));
  }

  save(req, res) {
    this.bookService.save(req.body)
    .then(book => res.json(book))
    .catch(err => res.status(500).json({ message: 'something terrible happened' }));
  }

  update(req, res) {
    this.bookService.update(req.params.id, req.body)
    .then(book => res.json(book))
    .catch(err => res.status(500).json({ message: 'something terrible happened' }));
  }

  delete(req, res) {
    this.bookService.delete(req.params.id);
    res.status(204).json({ message: 'Book removed' });
  }
}

export default BookController;
