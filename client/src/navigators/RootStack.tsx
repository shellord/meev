import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

const RootStack = () => {
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerShown: true,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
