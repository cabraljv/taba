import React, { useState } from 'react';

import { StatusBar } from 'react-native';
import {
  Container,
  Header,
  Logo,
  FieldsArea,
  FieldLabel,
  FieldContainer,
  TextField,
  SingUpButton,
  SingUpText,
  Button,
  ButtonText,
} from './styles';

import api from '../../services/api';

import logo from '../../assets/images/logo.png';


const SignIn = () => {

  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  const handleSubmit = async () => {
    try {
      const response = await api.post('/user', { email, password: passwd })
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data)
    }

  }
  return (
    <Container>
      <StatusBar backgroundColor="#fff" />
      <Header>
        <Logo source={logo} />
      </Header>
      <FieldsArea>
        <FieldContainer>
          <FieldLabel>E-MAIL</FieldLabel>
          <TextField
            placeholder="Insira seu e-mail"
            onChange={(text) => setPasswd(text.currentTarget)}
          />
        </FieldContainer>
        <FieldContainer>
          <FieldLabel>SENHA</FieldLabel>
          <TextField
            placeholder="Insira sua senha"
            secureTextEntry
            onChange={(text) => setEmail(text.currentTarget)}
          />
        </FieldContainer>
      </FieldsArea>
      <SingUpButton><SingUpText>Não tem conta? Cadastre-se</SingUpText></SingUpButton>
      <Button onPress={handleSubmit}>
        <ButtonText>ENTRAR</ButtonText>
      </Button>
    </Container>
  );
};

export default SignIn;
