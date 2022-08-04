import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import tw from 'twrnc';
import { AuthStackNavigationProp } from '../../navigators/AuthStack';
import useAuthentication from '../../hooks/useAuthentication';

const Signup: React.FC<AuthStackNavigationProp<'Signup'>> = ({ navigation }) => {
  const { signUp } = useAuthentication();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignup = async () => {
    if (!email || !password) {
      return;
    }
    try {
      await signUp(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={tw`mt-2  p-5`}>
      <Text>Email</Text>
      <TextInput
        style={tw`bg-white p-2 text-black mb-2`}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text>Password</Text>
      <TextInput style={tw`bg-white p-2 text-black`} onChangeText={(text) => setPassword(text)} />
      <Button title='Sign up ' onPress={handleSignup} />
      <Button title='Back' onPress={() => navigation.pop()} />
    </View>
  );
};

export default Signup;
