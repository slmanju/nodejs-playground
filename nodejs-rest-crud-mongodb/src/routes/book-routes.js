import express from 'express';

import BookController from '../controller/book-controller.js';

const bookRouter = express.Router();
const bookController = new BookController();

bookRouter.get('/', (req, res) => bookController.findAll(req, res));
bookRouter.get('/:id', (req, res) => bookController.findById(req, res));
bookRouter.post('/', (req, res) => bookController.save(req, res));
bookRouter.put('/:id', (req, res) => bookController.update(req, res));
bookRouter.delete('/:id', (req, res) => bookController.delete(req, res));

export default bookRouter;
