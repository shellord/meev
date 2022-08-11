import { View, Button } from 'react-native';
import React from 'react';
import useAuthentication from '../hooks/useAuthentication';
import { gql, useQuery } from '@apollo/client';

const Home = () => {
  const { signOut } = useAuthentication();
  const { data, loading } = useQuery(gql`
    query Query {
      me
    }
  `);

  console.log(data);

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Button title='Logout' onPress={handleLogout} />
    </View>
  );
};

export default Home;
