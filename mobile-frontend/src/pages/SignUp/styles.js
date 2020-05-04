import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: center;
`;
export const Header = styled.View`
  margin-bottom: 100px;
`;

export const Logo = styled.Image`
  width: 230px;
  height: 50px;
`;
export const FieldsArea = styled.View`
  width: 80%;
`;
export const FieldLabel = styled.Text`
  font-family: 'Montserrat-Bold';
  color: #0576bb;
  margin-left: 10px;
  font-size: 12px;
`;
export const FieldContainer = styled.View`
margin-bottom: 30px;
`;
export const TextField = styled.TextInput`
  width: 100%;
  background: #fff;
  padding: 10px 20px;
  font-size: 16px;
  elevation: 5;
  border-radius: 20px;
`;
export const SingUpButton = styled.TouchableOpacity`
 padding: 5px;
`;
export const SingUpText = styled.Text`

  color: #333;
  font-size: 14px;
`;
export const Button = styled.TouchableOpacity`
  width: 70%;
  height: 55px;
  background: #F27405;
  border-radius: 20px;
  margin-top: 30px;
  elevation: 5;
`;
export const ButtonText = styled.Text`
  font-family: 'Montserrat-Bold';
  letter-spacing: 2px;
  color: #fff;
  margin: auto;
  font-size: 18px;
`;

