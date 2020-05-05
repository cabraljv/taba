import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ConfirmationContainer = styled.View`
  width: 85%;
  height: 300px;
  background: #fff;
  border-radius: 20px;
  margin-top: 24px;
  display: flex;
  elevation: 10;
  padding: 20px;

  align-items: center;
  justify-content: space-evenly;
`;

export const ConfirmationText = styled.Text`
  color: #00588E;
  margin-bottom: 50px;
  font-size: 32px;
  text-align: center;
`;

export const ConfirmButton = styled.TouchableOpacity`
  background-color: #F27405;
  border-radius: 20px;
  width: 150px;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const ButtonText = styled.Text`
font-size: 24px;
  color: #ffffff;
`;
