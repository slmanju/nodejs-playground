import bodyParser from 'body-parser';
import cors from 'cors';

import bookRouter from '../routes/book-routes.js';

function routes(app) {
  app.use(cors());
  app.use(bodyParser.json());
  
  app.get("/", (req, res) => res.json({ message: "Hello World" }));
  app.use("/books", bookRouter);
}

export default routes;
