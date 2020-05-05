import React from 'react';
import { StatusBar } from 'react-native';
import { Container, ConfirmationText, ConfirmButton, ButtonText, ConfirmationContainer } from './styles';

const ConfirmationScreen = ({ navigation }) => {
  return (
    <Container colors={['#B8DFFF', '#FFC28D']}>
      <StatusBar backgroundColor="#B8DFFF" barStyle="dark-content" translucent={false} />

      <ConfirmationContainer>
        <ConfirmationText>SEU SERVIÇO FOI AGENDADO</ConfirmationText>

        <ConfirmButton onPress={() => navigation.push('Dashboard')}>
          <ButtonText>OK</ButtonText>
        </ConfirmButton>
      </ConfirmationContainer>
    </Container>
  )
}

export default ConfirmationScreen;
