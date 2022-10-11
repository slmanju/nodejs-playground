import express from "express";

const bookRouter = express.Router();

let books = [];

bookRouter.get('/', (req, res) => {
  res.json(books);
});

bookRouter.get('/:id', (req, res) => {
  const book = books.find(book => book.id === parseInt(req.params.id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

bookRouter.post('/', (req, res) => {
  const book = req.body;
  book.id = new Date().valueOf();
  books.push(book);
  res.status(201).json(book);
});

bookRouter.put('/:id', (req, res) => {
  const book = books.find(book => book.id === parseInt(req.params.id));
  if (book) {
    const updatable = req.body;
    book.title = updatable.title;
    book.author = updatable.author;
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

bookRouter.delete('/:id', (req, res) => {
  books = books.filter(book => book.id !== parseInt(req.params.id));
  res.status(204).send();
});

export { bookRouter };
