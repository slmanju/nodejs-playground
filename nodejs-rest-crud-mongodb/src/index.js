import express from 'express';

import routes from './config/routes.js';

const app = express();

routes(app);

app.listen(3000, () => console.log("app listening on port 3000"));
