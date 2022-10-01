import express from "express";
import configureGraphql from './graphql-schema.js';

const app = express();

configureGraphql(app);

app.listen(4000, () => console.log('Running a GraphQL API server at http://localhost:4000/graphql'));
