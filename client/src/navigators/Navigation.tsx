import React from 'react';
import HomeStack from './RootStack';
import AuthStack from './AuthStack';
import useAuthentication from '../hooks/useAuthentication';

const Navigation = () => {
  const { user } = useAuthentication();

  return user ? <HomeStack /> : <AuthStack />;
};

export default Navigation;
