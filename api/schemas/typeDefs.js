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
  }
  type Workout {
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
  }
  type Auth {
    token: ID!
    user: User
}`;

module.exports = typeDefs;
