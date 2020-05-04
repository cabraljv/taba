import React, { useEffect, useState, useCallback } from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { StatusBar, View, Text } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { MAPBOX_KEY } from 'react-native-dotenv';
import { Container, MapContainer } from './styles';

import api from '../../services/api';

MapboxGL.setAccessToken(MAPBOX_KEY);
MapboxGL.setConnected(true);

const Dashboard = () => {
  const [coordinates, setCoordinates] = useState([-49.6446024, -27.2108001]);
  const [establishments, setEstablishments] = useState([]);

  const loadEstablishments = useCallback(async () => {
    const response = await api({
      method: 'GET',
      url: '/geo',
      query: {
        longitude: coordinates[0],
        latitude: coordinates[1],
      },
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg4NTQ0MDg0LCJleHAiOjE1ODkxNDg4ODR9.1g3OkXLyblvKpycwdjh2azHgGS7x_qTQvOXvh6CR6Fg',
      },
    });

    console.log(response);

    setEstablishments(response.data);
  }, [coordinates]);

  useEffect(() => {
    MapboxGL.setTelemetryEnabled(true);
    Geolocation.watchPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates([longitude, latitude]);
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 1000, maximumAge: 1000 }
    );

    loadEstablishments();
  }, []);

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
