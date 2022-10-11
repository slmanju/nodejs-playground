import express from "express";
import { BookController } from '../controller/book-controller.js';

const bookRouter = express.Router();

const bookControler = new BookController();

bookRouter.get('/', async (req, res) => bookControler.findAll(req, res));
bookRouter.get('/:id', async (req, res) => bookControler.findById(req, res));
bookRouter.post('/', async (req, res) => bookControler.save(req, res));
bookRouter.put('/:id', async (req, res) => bookControler.update(req, res));
bookRouter.delete('/:id', async (req, res) => bookControler.delete(req, res));

export { bookRouter };
