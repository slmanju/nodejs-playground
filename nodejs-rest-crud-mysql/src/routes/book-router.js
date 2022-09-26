import express from "express";
import { BookController } from "../controller/book-controller";

const router = express.Router();

const bookController = new BookController();

router.get('/', bookController.findAll);
router.get('/:id', bookController.findById);
router.post('/', bookController.save);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.delete);

module.exports = router;
