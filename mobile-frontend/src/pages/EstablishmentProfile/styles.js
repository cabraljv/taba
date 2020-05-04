import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;
`;
export const Header = styled.View`
  width: 100%;
  display: flex;
`;
export const WelcomeText = styled.Text`
  margin: auto;
  font-family: 'Montserrat-Bold';
  color: #00588e;
  font-size: 14px;
  margin-top: 20px;
`;
export const NameText = styled.Text`
  margin: auto;
  font-family: 'Montserrat-ExtraBold';
  color: #00588e;
  font-size: 20px;
`;
export const Profile = styled.View`
  display: flex;
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 50px;
`;
export const ProfileImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;
export const SellImage = styled.Image`
  height: 50px;
  width: 90px;
  margin: auto 0;
`;
export const SellsContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

export const SellsContainerTexts = styled.View``;
export const SellsText = styled.Text`
  font-family: 'Montserrat-Bold';
  color: #00588e;
  font-size: 20px;
  margin-top: -15px;
  font-weight: bold;
`;
export const SellsNumberText = styled.Text`
  color: #00588e;
  font-family: 'Montserrat-Black';
  font-size: 36px;
`;
export const ServicesAvalible = styled.View`
  width: 100%;
  margin-top: 50px;
`;
export const ServicesAvalibleText = styled.Text`
  color: #000;
  font-family: 'Montserrat-Bold';
  font-size: 18px;
  margin-left: 40px;
`;
export const ServicesList = styled.ScrollView`
  width: 100%;
`;
export const ServiceListContainer = styled.View`
  width: 100%;
  margin-top: 10px;
  height: 290px;
`;
export const ServiceContainer = styled.View`
  width: 200px;
  height: 280px;
  background: #fff;
  border-radius: 20px;
  margin: 5px;
  display: flex;
  elevation: 5;
`;
export const ServiceTitle = styled.Text`
  font-size: 20px;
  font-family: 'Montserrat-Black';
  margin: 0 auto;
  margin-top: 20px;
`;
export const ServiceDesc = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 12px;
  margin: 0 auto;
  margin-top: 10px;
  width: 80%;
`;
export const ServiceValue = styled.Text`
  margin: 15px auto;
  font-size: 18px;
  font-family: 'Montserrat-Bold';
`;
export const ServicePointsContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 80px;
  height: 30px;
  background: #a2dcff;
  border-radius: 20px;
  margin: 0 auto;
`;
export const PointsIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin: auto;
  border-radius: 20px;
`;
export const PointsIconContainer = styled.View`
  width: 30px;
  height: 30px;
  background: #fff;
  border: 2px solid #A2DCFF;
  margin: auto 0;
  border-radius: 20px;
`;
export const PointsCount = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 18px;
  color: #1cb3ff;
  margin: auto 15px;
`;
export const ServiceBuyButton = styled.TouchableOpacity`
  width: 170px;
  height: 40px;
  border-radius: 30px;
  background: #0576bb;
  margin: auto;
  elevation: 4;
`;

export const ServiceButtonText = styled.Text`
  margin: auto;
  font-family: 'Montserrat-Bold';
  font-size: 16px;
  color: #fff;
`;

export const ScheduleButton = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  background: ${(prop) => (prop.disabled ? '#636363' : '#f27405')};
  elevation: 5;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 30px;
`;
export const ScheduleButtonText = styled.Text`
  margin: auto;
  font-family: 'Montserrat-Bold';
  font-size: 18px;
  color: ${(prop) => (prop.disabled ? '#aaa' : '#fff')};
`;
export const FooterContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;
