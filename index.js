const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const cors = require("cors");
const express = require("express");

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
