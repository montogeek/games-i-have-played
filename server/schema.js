import { GraphQLSchema } from 'graphql'
import { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

import { fetchByName } from './igdb-api'

const GameType = new GraphQLObjectType({
  name: 'Game',
  description: 'Somebody that you used to know',
  fields: () => ({
    _id: {
      type: GraphQLInt,
      resolve: game => game.id
    },
    name: {
      type: GraphQLString,
      description: 'Self explanatory'
    },
    summary: {
      type: GraphQLString,
      description: 'What this game is about!'
    },
    releaseDate: {
      type: GraphQLString,
      description: 'First date the game was released',
      resolve: game => game.first_release_date
    }
  })
})

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    games: {
      type: new GraphQLList(GameType),
      resolve: root => {
        return [
          {
            id: 222,
            name: 'snns'
          }
        ]
      }
    },
    game: {
      type: new GraphQLList(GameType),
      args: {
        name: {
          type: GraphQLString
        }
      },
      resolve: (root, args) => fetchByName(args.name)
    }
  })
})

export default new GraphQLSchema({
  query: QueryType
})
