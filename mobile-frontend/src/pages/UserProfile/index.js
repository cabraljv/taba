import React from 'react';

import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BackButton from '../../components/BackButton';
import { UserInfo, Avatar } from './styles';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

const UserProfile = ({ navigation }) => {
  const { user } = useAuth();

  return (
    <LinearGradient colors={['#B8DFFF', '#FFC28D']} style={{ flex: 1 }}>
      <BackButton onPress={() => navigation.goBack()}/>
      <Text>Meu Perfil</Text>

      <UserInfo>
        <Avatar width={98} source={{
          uri: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        }} />

        <View>
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
        </View>
      </UserInfo>
    </LinearGradient>
  );
};

export default UserProfile;
