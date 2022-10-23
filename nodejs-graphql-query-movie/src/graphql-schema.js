import { graphqlHTTP } from "express-graphql";
import graphql from 'graphql';
import { findMovie, findDirector, findMoviesByDirector, findMovies } from './movie-data-service.js';

const MovieType = new graphql.GraphQLObjectType({
  name: 'MovieType',
  fields: () => ({
    id: { type: graphql.GraphQLString },
    title: { type: graphql.GraphQLString },
    year: { type: graphql.GraphQLInt },
    director: {
      type: DirectorType,
      resolve: (parent, args) => {
        return findDirector(parent.directorId);
      }
    }
  })
});

const DirectorType = new graphql.GraphQLObjectType({
  name: 'DirectorType',
  fields: () => ({
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
    movies: {
      type: new graphql.GraphQLList(MovieType),
      resolve: (parent, args) => {
        return findMoviesByDirector(parent.id);
      }
    }
  })
});

const RootQueryType = new graphql.GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: graphql.GraphQLString }},
      resolve: (parent, args) => {
        return findMovie(args.id);
      }
    },
    director: {
      type: DirectorType,
      args: { id: { type: graphql.GraphQLString }},
      resolve: (parent, args) => {
        return findDirector(args.id);
      }
    },
    movies: {
      type: new graphql.GraphQLList(MovieType),
      resolve: () => {
        return findMovies();
      }
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
