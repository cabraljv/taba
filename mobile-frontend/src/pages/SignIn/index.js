import React from 'react';

import { Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { Container } from './styles';

const SignIn = () => {
  return (
    <LinearGradient colors={['#B8DFFF', '#FFC28D']} style={{ flex: 1 }}>
      <Text>Sign In</Text>
    </LinearGradient>
  );
};

export default SignIn;
