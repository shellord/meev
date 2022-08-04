import React from 'react';
import { View, Text, TextInput } from 'react-native';
import tw from 'twrnc';

const Signin = () => {
  return (
    <View>
      <Text>Sign In</Text>
      <TextInput style={tw`bg-red-500 p-2 text-white`} />
    </View>
  );
};

export default Signin;
