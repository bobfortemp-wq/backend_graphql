import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export const AuthResponseType = new GraphQLObjectType({
  name: 'AuthResponse',
  fields: {
    message: { type: GraphQLString },
    token: { type: GraphQLString }
  }
});