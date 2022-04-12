const { gql } = require('apollo-server-express');
// Querries

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    description: String
  }
  type Query {
    hello: String
    getAll: [Post]
  }
  input postInput {
    title: String
    description: String
  }
  type Mutation {
    createPost(post: postInput): Post
    updatePost(id: String, post: postInput): Post
    deletePost(id:String):String
  }
`;


module.exports = typeDefs;