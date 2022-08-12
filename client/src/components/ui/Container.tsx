import React from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants';
import tw from 'twrnc';
import { StatusBar } from 'expo-status-bar';

const Container: React.FC = ({ children }) => {
  const statusBarHeight = Constants.statusBarHeight;
  return (
    <>
      <View style={tw`pt-[${statusBarHeight}]`}>{children}</View>
      <StatusBar style='auto' />
    </>
  );
};

export default Container;
