import { authMutations } from '../modules/auth/auth.graphql.js';

export const resolvers = {
  Mutation: {
    ...authMutations
  }
};