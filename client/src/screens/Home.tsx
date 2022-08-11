import { View, Button } from 'react-native';
import React from 'react';
import useAuthentication from '../hooks/useAuthentication';

const Home = () => {
  const { signOut, user } = useAuthentication();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const sendRequest = async () => {
    const token = await user?.getIdToken();
    if (!token) return;
    const res = await fetch('http://localhost:4000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: `
            query {
              me
            }
          `,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  sendRequest();

  return (
    <View>
      <Button title='Logout' onPress={handleLogout} />
    </View>
  );
};

export default Home;
