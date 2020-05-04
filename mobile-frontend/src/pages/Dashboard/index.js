import React, { useEffect, useState } from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { StatusBar } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { MAPBOX_KEY } from 'react-native-dotenv';

import ActionMenu from '../../components/ActionMenu';

import {
  Container,
  MapContainer,
  EstablishmentPin,
  EstablishmentImage,
} from './styles';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

MapboxGL.setAccessToken(MAPBOX_KEY);
MapboxGL.setConnected(true);

const Dashboard = ({ navigation }) => {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const [establishments, setEstablishments] = useState([]);

  const { token, user } = useAuth();

  const loadEstablishments = async () => {
    try {
      const response = await api.get(`/geo?latitude=${coordinates[1]}&longitude=${coordinates[0]}`, {
        headers: {
          authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg4NjExNDQxLCJleHAiOjE1ODkyMTYyNDF9.WvV0zjyjJleoBSrQ99ORQ4QyRgOo1rR-PrN4BF58rgw',
        },
      });

      setEstablishments(response.data);
    } catch (error) {
      console.log(error.response.data)
    }
  };

  useEffect(() => {
    MapboxGL.setTelemetryEnabled(true);
    Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates([longitude, latitude]);
      },
      (error) => console.log(error),
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 1000 }
    );
  }, []);

  useEffect(() => {
    if (coordinates !== [0, 0]) {
      loadEstablishments();
    }
  }, [coordinates])

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <MapContainer>
        <MapboxGL.MapView
          style={{ flex: 1 }}
          zoomEnabled
          logoEnabled={false}
          styleURL="mapbox://styles/cabraljv/ck9q8hq4z10e61ioajw9563dk"
          attributionEnabled={false}
          compassViewPosition={3}
        >
          <MapboxGL.Camera centerCoordinate={coordinates} zoomLevel={14} />
          <MapboxGL.UserLocation />
          {
            establishments.map((item) => {
              return (<MapboxGL.PointAnnotation
                key={item.id}
                id={item.name}
                coordinate={[item.longitude, item.latitude]}
                onSelected={() => navigation.push('EstablishmentProfile', {
                  establishmentId: item.id,
                })}
              >
                <EstablishmentPin>
                  <EstablishmentImage source={{
                    uri: item.logo.url,
                  }} />
                </EstablishmentPin>
              </MapboxGL.PointAnnotation>)
            })
          }
        </MapboxGL.MapView>
      </MapContainer>
      <ActionMenu user={user} navigation={navigation} />
    </Container>
  );
};

export default Dashboard;
