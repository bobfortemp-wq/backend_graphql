import express from 'express';
import axios from 'axios';
import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLInt,
    GraphQLString
} from 'graphql';
import { createHandler } from 'graphql-http/lib/use/express';

const app = express();
const PORT = 3000;

app.use(express.json());

// REST API
app.get('/api/users', async (req, res) => {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// GraphQL Types
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        website: { type: GraphQLString }
    }
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve: async () => {
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/users'
                );
                return response.data;
            }
        },
        user: {
            type: UserType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: async (_, args) => {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/users/${args.id}`
                );
                return response.data;
            }
        }
    }
});

// Schema
const schema = new GraphQLSchema({
    query: RootQuery
});

// GraphQL endpoint
app.all(
    '/graphql',
    createHandler({
        schema
    })
);

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});