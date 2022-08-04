import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (
    <View style={tw`bg-red-500 h-full`}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  );
}
