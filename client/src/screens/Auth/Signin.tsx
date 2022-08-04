import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import tw from 'twrnc';
import type { AuthStackNavigationProp } from '../../navigators/AuthStack';
import useAuthentication from '../../hooks/useAuthentication';

const Signin: React.FC<AuthStackNavigationProp<'Signin'>> = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { signIn } = useAuthentication();

  const handleSignin = async () => {
    if (!email || !password) {
      return;
    }

    try {
      await signIn(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <View style={tw`mt-2  p-5`}>
        <Text>Email</Text>
        <TextInput
          style={tw`bg-white p-2 text-black mb-2`}
          onChangeText={(text) => setEmail(text)}
        />
        <Text>Password</Text>
        <TextInput style={tw`bg-white p-2 text-black`} onChangeText={(text) => setPassword(text)} />
      </View>
      <Button title='Login' onPress={handleSignin} />
      <Button title='Create new account' onPress={() => navigation.push('Signup')} />
    </View>
  );
};

export default Signin;
