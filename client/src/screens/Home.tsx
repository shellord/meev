import { View, Button } from 'react-native';
import React from 'react';
import useAuthentication from '../hooks/useAuthentication';

const Home = () => {
  const { signOut } = useAuthentication();

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
