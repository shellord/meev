import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import Container from '../../components/ui/Container';

const Welcome = () => {
  return (
    <Container>
      <View style={tw`h-full`}>
        <View style={tw`bg-red-500 flex-1`}>
          <Text style={tw`text-black`}>Top</Text>
        </View>
        <View style={tw`bg-yellow-500 flex-1`}>
          <Text style={tw`text-black`}>Bottom</Text>
        </View>
      </View>
    </Container>
  );
};

export default Welcome;
