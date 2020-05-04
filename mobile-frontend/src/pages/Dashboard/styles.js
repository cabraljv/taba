import styled from 'styled-components/native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex:1;
`;

export const MapContainer = styled.View`
  flex:1;
`;

export const EstablishmentPin = styled.View`
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 45px;
`;

export const EstablishmentImage = styled.Image`
  width: 43px;
  height: 43px;
  border-radius: 43px;
  background: #fff;
  z-index: 5;
`;
