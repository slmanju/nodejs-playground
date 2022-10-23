import express from "express";
import configureGraphql from './graphql-schema.js';

const app = express();

configureGraphql(app);

app.listen(3000, () => console.log('Running a GraphQL API server at http://localhost:3000/graphql'));
