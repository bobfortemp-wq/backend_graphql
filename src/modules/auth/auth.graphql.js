import { GraphQLString } from 'graphql';
import { signup, login } from './auth.service.js';
import { AuthResponseType } from './auth.schema.js';

export const authMutations = {
  signup: {
    type: AuthResponseType,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve: (_, args) => signup(args)
  },
  login: {
    type: AuthResponseType,
    args: {
      email: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve: (_, args) => login(args)
  }
};