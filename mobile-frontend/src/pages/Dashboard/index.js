import React, { useEffect, useState } from 'react';
import { Container, MapContainer } from './styles';
import MapboxGL from "@react-native-mapbox-gl/maps";
import { StatusBar } from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import 'dotenv/config'

MapboxGL.setAccessToken(process.env.MAPBOX_KEY);
MapboxGL.setConnected(true);

const Dashboard = () => {
  const [coordinates, setCoordinates] = useState([-49.6446024, -27.2108001])


  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
    Geolocation.getCurrentPosition((latitude, longitude) => {
      setCoordinates([latitude, longitude])
    });
  }, [])

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
          <MapboxGL.Camera
            centerCoordinate={coordinates}
            zoomLevel={16}
          />

        </MapboxGL.MapView>
      </MapContainer>
    </Container >
  );
};

export default Dashboard;
