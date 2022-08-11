import { ApolloServer } from 'apollo-server';
import typeDefs from './type-defs';
import resolvers from './resolvers';
import { createContext } from './context';

const server = new ApolloServer({ typeDefs, resolvers, context: createContext });

server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
