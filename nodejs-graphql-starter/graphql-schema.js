import { graphqlHTTP } from "express-graphql";
import graphql from 'graphql';

const RootQueryType = new graphql.GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    message: { 
      type: graphql.GraphQLString,
      resolve: () => "Hello world!"
    }
  }
});

const schema = new graphql.GraphQLSchema({ query: RootQueryType });

function configureGraphql(app) {
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));
}

export default configureGraphql;
