import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const createApolloClient = (idToken: string | null) => {
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: idToken ? `Bearer ${idToken}` : '',
      },
    };
  });

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });

  return client;
};

export default createApolloClient;
