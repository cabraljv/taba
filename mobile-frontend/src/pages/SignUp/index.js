import React from 'react';

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

import logo from '../../assets/images/logo.png';

const SignIn = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#fff" />
      <Header>
        <Logo source={logo} />
      </Header>
      <FieldsArea>
        <FieldContainer>
          <FieldLabel>E-MAIL</FieldLabel>
          <TextField placeholder="Insira seu e-mail" />
        </FieldContainer>
        <FieldContainer>
          <FieldLabel>SENHA</FieldLabel>
          <TextField placeholder="Insira sua senha" />
        </FieldContainer>
      </FieldsArea>
      <SingUpButton><SingUpText>Não tem conta? Cadastre-se</SingUpText></SingUpButton>
      <Button>
        <ButtonText>ENTRAR</ButtonText>
      </Button>
    </Container>
  );
};

export default SignIn;
