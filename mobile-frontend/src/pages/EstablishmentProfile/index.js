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

import api from '../../services/api';

const EstablishmentProfile = () => {
  const [establishment, setEstablishment] = useState({});

  const getDataFromAPI = async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTg4Mzg2MTk4LCJleHAiOjE1ODg5OTA5OTh9.zRbL0hL590s8bO4S-I1SCB6NsPFUWZkXCtRNqQUy_rM';
    try {
      const response = await api({
        method: 'GET',
        url: '/establishment/10',
        headers: {
          authorization:
            `Bearer ${token}`,
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
      <StatusBar backgroundColor="#B8DFFF" barStyle="dark-content" />
      <BackButton />
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
                <ServiceBuyButton>
                  <ServiceButtonText>ADICIONAR</ServiceButtonText>
                </ServiceBuyButton>
              </ServiceContainer>
            ))}
        </ServicesList>
      </ServiceListContainer>
      <FooterContainer>
        <ScheduleButton disabled>
          <ScheduleButtonText disabled>AGENDAR</ScheduleButtonText>
        </ScheduleButton>
      </FooterContainer>
    </Container>
  );
};

export default EstablishmentProfile;
