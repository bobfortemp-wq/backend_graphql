import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';
import { authMutations } from '../modules/auth/auth.graphql.js';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...authMutations
  }
});

export default new GraphQLSchema({
  mutation: Mutation
});