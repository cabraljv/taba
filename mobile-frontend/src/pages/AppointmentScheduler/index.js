import React, { useState } from 'react';
import { StatusBar, Text } from 'react-native';
import {
  Container,
  Content,
  Header,
  TitleText,
  ServiceName,
  ServiceContainer,
  Navigation,
  ScheduleButton,
  ScheduleButtonText,
  PickerContainer
} from './styles';
import BackButton from '../../components/BackButton';
import RNPickerSelect from 'react-native-picker-select';

const AppointmentScheduler = () => {
  const [service, setService] = useState({});

  return (
    <Container colors={['#B8DFFF', '#FFC28D']}>
      <StatusBar backgroundColor="#B8DFFF" barStyle="dark-content" />

      <Navigation>
        <BackButton />
      </Navigation>

      <Content>
      <Header>
        <TitleText>AGENDAMENTO DE SERVIÇO</TitleText>
        <ServiceName>SERVIÇO</ServiceName>
      </Header>

      <ServiceContainer>
        <PickerContainer>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Football', value: 'football' },
              { label: 'Baseball', value: 'baseball' },
              { label: 'Hockey', value: 'hockey' },
            ]}
          />
        </PickerContainer>

        <PickerContainer>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Football', value: 'football' },
              { label: 'Baseball', value: 'baseball' },
              { label: 'Hockey', value: 'hockey' },
            ]}
            style={{ display: "flex", flex: 1 }}
          />
        </PickerContainer>
      </ServiceContainer>

      <ScheduleButton>
        <ScheduleButtonText>AGENDAR</ScheduleButtonText>
      </ScheduleButton>
      </Content>
    </Container>
  );
}

export default AppointmentScheduler;
