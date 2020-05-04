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

import { useAuth } from '../../hooks/auth';

import logo from '../../assets/images/logo.png';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, user } = useAuth();

  const handleSubmit = async () => {
    try {
      await signIn({
        email,
        password,
      });
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
            onChangeText={(text) => setEmail(text.trim())}
          />
        </FieldContainer>
        <FieldContainer>
          <FieldLabel>SENHA</FieldLabel>
          <TextField
            placeholder="Insira sua senha"
            secureTextEntry
            onChangeText={(text) => setPassword(text.trim())}
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
