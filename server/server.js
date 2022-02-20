const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { readFileSync } = require('fs');
const { resolvers } = require("./resolvers")
const path = require('path');

const app = express()

app.use(express.static('public'))

const server = new ApolloServer({
    typeDefs: readFileSync(path.join(__dirname,'schema.graphql'), 'utf-8'), 
    resolvers 
})

server.start().then(res => {
    server.applyMiddleware({ app, path: '/' });
    app.listen( 3000 , () => 
      console.log("Server is running....")
    );  
  });