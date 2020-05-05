import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import {
  Container,
  Header,
  Profile,
  ProfileImage,
  SellImage,
  SellsContainer,
  SellsContainerTexts,
  SellsText,
  SellsNumberText,
  WelcomeText,
  NameText,
  ServicesAvalible,
  ServicesAvalibleText,
  ServicesList,
  ServiceContainer,
  ServiceTitle,
  ServiceDesc,
  ServiceValue,
  ServicePointsContainer,
  PointsIcon,
  PointsCount,
  ServiceBuyButton,
  ServiceButtonText,
  ScheduleButton,
  ServiceListContainer,
  ScheduleButtonText,
  FooterContainer,
  PointsIconContainer
} from './styles';
import BackButton from '../../components/BackButton';
import avatar from '../../../tmp/avatar.png';
import money from '../../assets/icons/money.png';
import diamond from '../../assets/icons/diamond.png';

import { useAuth } from '../../hooks/auth'
import api from '../../services/api';

const EstablishmentProfile = ({ route, navigation }) => {
  const { establishmentId } = route.params;
  const { token } = useAuth();
  const [establishment, setEstablishment] = useState({});

  const getDataFromAPI = async () => {
    try {
      const response = await api.get(`/establishment/${establishmentId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setEstablishment(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  return (
    <Container colors={['#B8DFFF', '#FFC28D']}>
      <StatusBar backgroundColor="#B8DFFF" barStyle="dark-content" translucent={false} />
      <BackButton onPress={() => navigation.goBack()} />
      <Header>
        <WelcomeText>SEJA BEM VINDO</WelcomeText>
        <NameText>{establishment.name && establishment.name.toUpperCase()}</NameText>
      </Header>
      <Profile>
        {establishment.logo ? (
          <ProfileImage
            source={{
              uri: establishment.logo.url,
            }}
          />
        ) : (
            <ProfileImage source={avatar} />
          )}

        <SellsContainer>
          <SellImage source={money} />
          <SellsContainerTexts>
            <SellsNumberText>{establishment.sells}</SellsNumberText>
            <SellsText>vendas</SellsText>
          </SellsContainerTexts>
        </SellsContainer>
      </Profile>
      <ServicesAvalible>
        <ServicesAvalibleText>SERVIÇOS DISPONÍVEIS</ServicesAvalibleText>
      </ServicesAvalible>
      <ServiceListContainer>
        <ServicesList horizontal>
          {establishment.services &&
            establishment.services.map((item) => (
              <ServiceContainer key={item.id}>
                <ServiceTitle>{item.title}</ServiceTitle>
                <ServiceDesc>{item.description}</ServiceDesc>
                <ServiceValue>R$ {item.value}</ServiceValue>
                <ServicePointsContainer>
                  <PointsIconContainer>
                    <PointsIcon source={diamond} />
                  </PointsIconContainer>
                  <PointsCount>{item.value}</PointsCount>
                </ServicePointsContainer>
                <ServiceBuyButton
                  onPress={() => {
                    navigation.push('AppointmentScheduler', {
                      service: item,
                      providerId: establishment.id,
                    })}
                  }
                >
                  <ServiceButtonText>AGENDAR</ServiceButtonText>
                </ServiceBuyButton>
              </ServiceContainer>
            ))}
        </ServicesList>
      </ServiceListContainer>
    </Container>
  );
};

export default EstablishmentProfile;
