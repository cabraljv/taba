import React, { useState, useEffect, useCallback } from 'react';
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
  const [availableHours, setAvailableHours] = useState([]);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    // async function loadAvailableDays() {
    //   try {
    //     const response = await api.get(`/availible/days/${providerId}`, {
    //       headers: {
    //         authorization: `Bearer ${token}`,
    //       }
    //     });
    //     let array = response.data.map((day, index) => (
    //       {
    //         label: day,
    //         value: `data-${index}`
    //       }
    //     ))

    //     setAvailableDays(array)
    //   }
    //   catch(err) {
    //     console.log(err.response.data)
    //   }
    // }

    // loadAvailableDays()
  }, []);

  return (
    <Container colors={['#B8DFFF', '#FFC28D']}>
      <StatusBar backgroundColor="#B8DFFF" barStyle="dark-content" translucent={false} />

      <Navigation>
        <BackButton onPress={() => navigation.goBack()} />
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
            items={[
              {
                label: '10/05',
                value: `date1005`
              },
              {
                label: '11/05',
                value: `date1105`
              },
              {
                label: '12/05',
                value: `date1205`
              },
              {
                label: '13/05',
                value: `date1305`
              },
              {
                label: '14/05',
                value: `date1405`
              },
              {
                label: '15/05',
                value: `date1505`
              },
            ]}
          />
        </PickerContainer>

        <PickerContainer>
          <SelectText>Selecione o horário:</SelectText>
          <RNPickerSelect
            onValueChange={value => value}
            items={[
              {
                label: '08:00',
                value: `1`
              },
              {
                label: '09:00',
                value: `2`
              },
              {
                label: '10:00',
                value: `3`
              },
              {
                label: '11:00',
                value: `4`
              },
              {
                label: '12:00',
                value: `5`
              },
              {
                label: '13:00',
                value: `6`
              },
              {
                label: '14:00',
                value: `7`
              },
              {
                label: '15:00',
                value: `8`
              },
            ]}
            disabled={disable}
          />
        </PickerContainer>
      </ServiceContainer>

      <ScheduleButton onPress={() => navigation.push('ConfirmationScreen')}>
        <ScheduleButtonText>AGENDAR</ScheduleButtonText>
      </ScheduleButton>
      </Content>
    </Container>
  );
}

export default AppointmentScheduler;
