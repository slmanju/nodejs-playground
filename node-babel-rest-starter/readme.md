# NodeJs Babel REST Setup

### Install packages
```
npm init -y
npm install express body-parser cors --save
npm install @babel/core @bable/node @babel/preset-env --save-dev
npm install nodemon --save-dev
```

### .babelrc
```
{
  "presets": ["@babel/preset-env"]
}
```

### package.json
```
"start": "nodemon --exec babel-node src/index"
```

### src/index.js
```
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.json({ message: "Hello World" }));

app.listen(3000, () => console.log("app listening on port 3000"));
```
