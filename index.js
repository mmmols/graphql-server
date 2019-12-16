const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const cors = require("cors");
const express = require("express");

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

app.use(cors());

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000`)
);
