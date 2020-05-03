import React, { useEffect, useState } from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { StatusBar, View, Text } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { MAPBOX_KEY } from 'react-native-dotenv';
import { Container, MapContainer } from './styles';

MapboxGL.setAccessToken(MAPBOX_KEY);
MapboxGL.setConnected(true);
const Dashboard = () => {
  const [coordinates, setCoordinates] = useState([-49.6446024, -27.2108001]);

  useEffect(() => {
    MapboxGL.setTelemetryEnabled(true);
    Geolocation.watchPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates([longitude, latitude]);
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 1000, maximumAge: 1000 }
    );
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
          <MapboxGL.PointAnnotation
            id="teste"
            coordinate={[-43.008232, -20.572046]}
          >
            <View
              style={{
                width: 50,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'blue',
                borderRadius: 15,
              }}
            >
              <Text>Teste</Text>
            </View>
          </MapboxGL.PointAnnotation>
        </MapboxGL.MapView>
      </MapContainer>
    </Container>
  );
};

export default Dashboard;
