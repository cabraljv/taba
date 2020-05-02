import React from 'react';

import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BackButton from '../../components/BackButton';
import { UserInfo } from './styles';

import avatar from '../../tmp/avatar.png';

const SignIn = () => {
  return (
    <LinearGradient colors={['#B8DFFF', '#FFC28D']} style={{ flex: 1 }}>
      <BackButton />
      <Text>Meu Perfil</Text>

      <UserInfo>
        <Image width={98} source={avatar} />

        <View>
          <Text>Nome Completo</Text>
          <Text>Usuario</Text>
        </View>
      </UserInfo>
    </LinearGradient>
  );
};

export default SignIn;
