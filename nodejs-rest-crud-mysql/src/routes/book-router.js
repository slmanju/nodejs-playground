import express from "express";
import { BookService } from '../services/book-service';

const router = express.Router();

const bookService = new BookService();

router.get('/', (req, res) => {
  bookService.findAll()
    .then(books => res.json(books))
    .catch(err => res.status(500).json({ message: 'something terrible happened' }));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  bookService.findById(id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ message: `book not found for id ${id}`}));
});

router.post('/', (req, res) => {
  bookService.save(req.body)
    .then(book => res.json(book))
    .catch(err => res.status(500).json({ message: 'something terrible happened' }));
});

router.put('/:id', (req, res) => {
  bookService.update(req.params.id, req.body)
    .then(book => res.json(book))
    .catch(err => res.status(500).json({ message: 'something terrible happened' }));
});

router.delete('/:id', (req, res) => {
  bookService.delete(req.params.id);
  res.status(204).json({ message: 'Book removed' });
});

module.exports = router;
