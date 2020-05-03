import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { Container } from './styles';

const BackButton = () => (
  <Container>
    <AntDesign name="left" size={20} color="#fff" />
  </Container>
);

export default BackButton;
