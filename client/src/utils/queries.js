import gql from 'graphql-tag';

export const GET_ME = gql`
{
  me {
      _id
      username
      email
      savedWorkouts {
        _id
        name
        description
        links
        sets
        reps
        time
        weights
        distance
        resistance
        isPublic
        createdAt
      }
    }
} 
`;