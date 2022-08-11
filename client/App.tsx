import React from 'react';
import { ApolloProvider } from '@apollo/client';
import './src/config/firebase';
import Navigation from './src/navigators/Navigation';
import createApolloClient from './src/lib/createApolloClient';
import useAuthentication from './src/hooks/useAuthentication';

export default function App() {
  const { user } = useAuthentication();
  const [idToken, setIdToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    const getIdToken = async () => {
      if (!user) {
        return;
      }
      const token = await user.getIdToken();
      setIdToken(token);
    };
    getIdToken();
  }, [user]);

  const client = createApolloClient(idToken);

  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
}
