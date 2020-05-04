import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;
`;

export const Content = styled.View`
  width: 100%;
  height: 85%;
  justify-content: space-evenly;
  align-items: center;
`;

export const Navigation = styled.View`
  width: 100%;
  align-content: space-between;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
`;

export const TitleText = styled.Text`
  margin: auto;
  font-family: 'Montserrat-ExtraBold';
  color: #00588e;
  font-size: 18px;
  margin-top: 20px;
`;

export const ServiceName = styled.Text`
  margin: auto;
  font-family: 'Montserrat-Bold';
  color: #00588e;
  font-size: 14px;
  margin-top: 20px;
`;

export const ServiceContainer = styled.View`
  width: 85%;
  height: 250px;
  background: #fff;
  border-radius: 20px;
  margin-top: 24px;
  display: flex;
  elevation: 10;

  flex-direction: column;
  justify-content: space-evenly;
`;

export const ScheduleButton = styled.TouchableOpacity`
  width: 65%;
  height: 80px;
  border-radius: 20px;
  margin-top: 24px;
  background-color: #0576BB;

  align-items: center;
  justify-content: center;
`;

export const ScheduleButtonText = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 24px;
  color: #fff;
`;

export const PickerContainer = styled.View`
  width: 95%;
  height: 50px;
  font-size: 18px;
`;
