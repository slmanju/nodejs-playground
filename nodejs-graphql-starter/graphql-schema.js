import { graphqlHTTP } from "express-graphql";
import graphql from 'graphql';

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    message: { 
      type: GraphQLString,
      resolve: () => "Hello world!"
    }
  }
});

const schema = new GraphQLSchema({ query: RootQueryType });

function configureGraphql(app) {
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));
}

export default configureGraphql;
