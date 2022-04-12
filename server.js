const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const mongoose = require('mongoose')

const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const typeDefs = require('./typeDefs/typeDefs')
const resolvers = require('./resolvers/resolvers')
const URL =
  'mongodb+srv://akashmahmud:01313545778@cluster0.kslo3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

  const databae = async() => {
      await mongoose.connect(URL, {})
      console.log('Database Connected');
  }

databae();

//Resolvers



const graphqlServer = async() => {
const app = express()
const apploServer = new ApolloServer({
  typeDefs,
  resolvers,

  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
});

await apploServer.start();
apploServer.applyMiddleware({app:app})

app.listen(8000, () => {
    console.log('graphql server have startred');
})
}

graphqlServer();