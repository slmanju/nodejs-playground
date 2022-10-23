import { graphqlHTTP } from "express-graphql";
import graphql from 'graphql';
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLSchema } = graphql;
import { findMovie, findDirector, findMoviesByDirector, findMovies } from './movie-data-service.js';
import { directorLoader } from './batch-loader.js';

const MovieType = new GraphQLObjectType({
  name: 'MovieType',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    year: { type: GraphQLInt },
    director: {
      type: DirectorType,
      resolve: (parent, args, { loaders }) => {
        return loaders.directorLoader.load(parent.directorId);
      }
    }
  })
});

const DirectorType = new GraphQLObjectType({
  name: 'DirectorType',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    movies: {
      type: new GraphQLList(MovieType),
      resolve: (parent) => {
        return findMoviesByDirector(parent.id);
      }
    }
  })
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLString }},
      resolve: (parent, args) => {
        return findMovie(args.id);
      }
    },
    director: {
      type: DirectorType,
      args: { id: { type: GraphQLString }},
      resolve: (parent, args) => {
        return findDirector(args.id);
      }
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve: () => {
        return findMovies();
      }
    }
  }
});

const schema = new GraphQLSchema({ query: RootQueryType });

function configureGraphql(app) {
  const loaders = {
    directorLoader
  };

  app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: { loaders }
  }));
}

export default configureGraphql;
