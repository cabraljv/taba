import React, { useEffect, useState, useCallback } from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { StatusBar, Image } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { MAPBOX_KEY } from 'react-native-dotenv';
import { Container, MapContainer, EstablishmentPin, EstablishmentImage } from './styles';

import api from '../../services/api';

import image from '../../../tmp/avatar.png';

MapboxGL.setAccessToken(MAPBOX_KEY);
MapboxGL.setConnected(true);

const Dashboard = () => {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const [establishments, setEstablishments] = useState([]);

  const loadEstablishments = async () => {
    try {
      const response = await api.get(`/geo?latitude=${coordinates[1]}&longitude=${coordinates[0]}`, {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTg4Mzg2MTk4LCJleHAiOjE1ODg5OTA5OTh9.zRbL0hL590s8bO4S-I1SCB6NsPFUWZkXCtRNqQUy_rM',
        },
      });

      console.log(response.data);

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
      { enableHighAccuracy: true, timeout: 1000, maximumAge: 1000 }
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
          <MapboxGL.Camera centerCoordinate={coordinates} zoomLevel={16} />
          <MapboxGL.UserLocation />

          {establishments.map((establishment) => (
            <MapboxGL.PointAnnotation
              id={establishment.id}
              coordinate={[establishment.longitude, establishment.latitude]}
            >
              <EstablishmentPin>
                <EstablishmentImage
                  source={{
                    uri: establishment.logo.url,
                  }}
                />
              </EstablishmentPin>
            </MapboxGL.PointAnnotation>
          ))}
        </MapboxGL.MapView>
      </MapContainer>
    </Container>
  );
};

export default Dashboard;
