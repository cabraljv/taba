import React from 'react';

import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BackButton from '../../components/BackButton';
import { UserInfo, Avatar } from './styles';

import api from '../../services/api';

const SignIn = () => {
  return (
    <LinearGradient colors={['#B8DFFF', '#FFC28D']} style={{ flex: 1 }}>
      <BackButton />
      <Text>Meu Perfil</Text>

      <UserInfo>
        <Avatar width={98} source={{
          uri: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        }} />

        <View>
          <Text>Nome Completo</Text>
          <Text>Usuario</Text>
        </View>
      </UserInfo>
    </LinearGradient>
  );
};

export default SignIn;
