import React, { useState } from 'react';

import { StatusBar } from 'react-native';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/auth';

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

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, user } = useAuth();

  const handleSubmit = async () => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um E-mail válido"),
        password: Yup.string()
          .required("Senha obrigatória"),
      });

      await schema.validate({ email, password }, { abortEarly: false });

      await signIn({
        email,
        password,
      });

      navigation.push('Dashboard');
    } catch (error) {
      console.log(error)
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
