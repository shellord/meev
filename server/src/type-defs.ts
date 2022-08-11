import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello: String
    me: String
  }
`;

export default typeDefs;
