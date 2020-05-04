import React, { useState } from 'react';
import { StatusBar, Text } from 'react-native';
import {
  Container,
  Content,
  SelectText,
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
  const [disable, setDisable] = useState(true);

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
          <SelectText>Selecione o dia:</SelectText>
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
          <SelectText>Selecione o horário:</SelectText>
          <RNPickerSelect
            onValueChange={() => setDisable(false)}
            items={[
              { key: "1", label: 'Football', value: 'football' },
              { key: "2", label: 'Baseball', value: 'baseball' },
              { key: "3", label: 'Hockey', value: 'hockey' },
            ]}
            disabled={disable}
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
