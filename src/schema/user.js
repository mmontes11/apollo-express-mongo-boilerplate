import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    me: User
    user(id: ID!): User
    users: [User!]
  }

  extend type Mutation {
    signUp(email: String!, username: String!, password: String): Token!
    createUser(email: String!, username: String!, password: String!, roles: [String!]): Boolean!
    login(login: String!, password: String!): Token!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    messages: [Message!]
    roles: [String!]
  }

  type Token {
    token: String!
  }
`;
