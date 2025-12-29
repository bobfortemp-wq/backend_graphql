import express from 'express';
import routes from './routes.js';
import schema from './graphql/schema.js';
import { createHandler } from 'graphql-http/lib/use/express';
import { renderGraphiQL } from '@graphiql/toolkit';

const app = express();
app.use(express.json());
/* REST APIs */
app.use(routes);

app.get('/', (req, res) => {
  res.send('Welcome to the API server');
});

/* GraphQL API */
app.all(
  '/graphql',
  createHandler({
    schema
  })
);

/* GraphiQL UI */
app.get('/graphiql', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(
    renderGraphiQL({
      endpoint: '/graphql'
    })
  );
});

export default app;