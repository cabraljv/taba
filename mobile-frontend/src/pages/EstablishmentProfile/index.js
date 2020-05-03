import React from 'react';
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
} from './styles';
import BackButton from '../../components/BackButton';
import avatar from '../../../tmp/avatar.png';
import money from '../../assets/icons/business.png';
import diamond from '../../assets/icons/diamond.png';

const EstablishmentProfile = () => {
  return (
    <Container colors={['#B8DFFF', '#FFC28D']}>
      <StatusBar backgroundColor="#B8DFFF" barStyle="dark-content" />
      <BackButton />
      <Header>
        <WelcomeText>SEJA BEM VINDO</WelcomeText>
        <NameText>ACADEMIA MONSTROFIT</NameText>
      </Header>
      <Profile>
        <ProfileImage source={avatar} />
        <SellsContainer>
          <SellImage source={money} />
          <SellsContainerTexts>
            <SellsNumberText>345</SellsNumberText>
            <SellsText>vendas</SellsText>
          </SellsContainerTexts>
        </SellsContainer>
      </Profile>
      <ServicesAvalible>
        <ServicesAvalibleText>SERVIÇOS DISPONÍVEIS</ServicesAvalibleText>
      </ServicesAvalible>
      <ServiceListContainer>
        <ServicesList horizontal>
          <ServiceContainer>
            <ServiceTitle>PACOTE 3</ServiceTitle>
            <ServiceDesc>
              Você poderá frequentar a academia com mais 3 alunos, em 3 dias da
              semana
            </ServiceDesc>
            <ServiceValue>R$ 59,99</ServiceValue>
            <ServicePointsContainer>
              <PointsIcon source={diamond} />
              <PointsCount>15</PointsCount>
            </ServicePointsContainer>
            <ServiceBuyButton>
              <ServiceButtonText>ADICIONAR</ServiceButtonText>
            </ServiceBuyButton>
          </ServiceContainer>
          <ServiceContainer>
            <ServiceTitle>PACOTE 3</ServiceTitle>
            <ServiceDesc>
              Você poderá frequentar a academia com mais 3 alunos, em 3 dias da
              semana
            </ServiceDesc>
            <ServiceValue>R$ 59,99</ServiceValue>
            <ServicePointsContainer>
              <PointsIcon source={diamond} />
              <PointsCount>15</PointsCount>
            </ServicePointsContainer>
            <ServiceBuyButton>
              <ServiceButtonText>ADICIONAR</ServiceButtonText>
            </ServiceBuyButton>
          </ServiceContainer>
          <ServiceContainer>
            <ServiceTitle>PACOTE 3</ServiceTitle>
            <ServiceDesc>
              Você poderá frequentar a academia com mais 3 alunos, em 3 dias da
              semana
            </ServiceDesc>
            <ServiceValue>R$ 59,99</ServiceValue>
            <ServicePointsContainer>
              <PointsIcon source={diamond} />
              <PointsCount>15</PointsCount>
            </ServicePointsContainer>
            <ServiceBuyButton>
              <ServiceButtonText>ADICIONAR</ServiceButtonText>
            </ServiceBuyButton>
          </ServiceContainer>
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
