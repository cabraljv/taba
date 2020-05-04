import React, { useState, useEffect } from 'react';
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
import { format } from 'date-fns';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

const AppointmentScheduler = ({ route, navigation }) => {
  const { token } = useAuth();
  const { providerId, service } = route.params;

  const [availableDays, setAvailableDays] = useState([]);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    async function loadAvailableDays() {
      console.log(providerId)
      try {
        const response = await api.get(`/availible/days/${1}`, {
          headers: {
            authorization: `Bearer ${token}`,
          }
        });
        setAvailableDays(response.data)
      }
      catch(err) {
        console.log(err.response.data)
      }
    }

    loadAvailableDays()
  }, []);

  return (
    <Container colors={['#B8DFFF', '#FFC28D']}>
      <StatusBar backgroundColor="#B8DFFF" barStyle="dark-content" translucent={false} />

      <Navigation>
        <BackButton />
      </Navigation>

      <Content>
      <Header>
        <TitleText>AGENDAMENTO DE SERVIÇO</TitleText>
        <ServiceName>{service.title}</ServiceName>
      </Header>

      <ServiceContainer>
        <PickerContainer>
          <SelectText>Selecione o dia:</SelectText>
          <RNPickerSelect
            onValueChange={() => setDisable(false)}
            items={
              availableDays.map((day, index) => (
                {
                  label: day,
                  value: `data-${index}`
                }
              ))
            }
          />
        </PickerContainer>

        <PickerContainer>
          <SelectText>Selecione o horário:</SelectText>
          <RNPickerSelect
            onValueChange={value => value}
            items={[
              { label: format(new Date('2020-05-05T08:00:00.000Z'), 'HH:mm'), value: 'horario' },
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
