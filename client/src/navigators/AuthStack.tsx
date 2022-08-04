import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Welcome from '../screens/Auth/Welcome';
import Signin from '../screens/Auth/Signin';
import Signup from '../screens/Auth/Signup';

type AuthStackParamList = {
  Welcome: undefined;
  Signin: undefined;
  Signup: undefined;
};

export type AuthStackNavigationProp<T extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  T
>;

const AuthStack = () => {
  const Stack = createNativeStackNavigator<AuthStackParamList>();

  const screenOptions = {
    headerShown: true,
  };

  const isShowWelcome = false;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        {isShowWelcome && <Stack.Screen name='Welcome' component={Welcome} />}
        <Stack.Screen name='Signin' component={Signin} />
        <Stack.Screen name='Signup' component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
