import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import booksRouter from './routes/book-router';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.json({ message: "Hello World" }));
app.use("/books", booksRouter);

app.listen(3000, () => console.log("app listening on port 3000"));
