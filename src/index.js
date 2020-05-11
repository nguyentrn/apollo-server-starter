import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import path from 'path';
import cors from 'cors';
import 'dotenv/config';

import typeDefs from './schemas';
import resolvers from './resolvers';
import db from './database';

const app = express();

// Apollo Server Middleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';

    return { db };
  },
  introspection: true,
  playground: true,
});
server.applyMiddleware({ app, path: '/graphql' });

//Express Middleware
app.use(cors());

//Static File
app.use(express.static('client/build'));
app.get('*', (req, res) =>
  res.sendFile(
    path.resolve(__dirname, 'client', 'build', 'index.html'),
  ),
);
const port = 5000;
app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`,
  ),
);
