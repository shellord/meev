import React from 'react';
import HomeStack from './RootStack';
import AuthStack from './AuthStack';

const Navigation = () => {
  const isLoggedIn = false;

  return isLoggedIn ? <HomeStack /> : <AuthStack />;
};

export default Navigation;
