const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveWorkout(input: workoutInput): User
  }
  type User {
    _id: ID
    username: String
    email: String
    savedWorkouts: [Workout]
    createdAt: String
    updatedAt: String
  }
  type Workout {
    _id: ID
    name: String
    description: String
    links: [String]
    sets: Int 
    reps: Int
    time: Float
    weights: [Float]
    distance: Float
    resistance: Float
    isPublic: Boolean
    createdAt: String
    updatedAt: String
  }
  input workoutInput {
    name: String
    description: String
    links: [String]
    sets: Int 
    reps: Int
    time: Float
    weights: [Float]
    distance: Float
    resistance: Float
    isPublic: Boolean
    createdAt: String 
    updatedAt: String
  }
  type Auth {
    token: ID!
    user: User
}`;

module.exports = typeDefs;
