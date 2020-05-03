import React, { useEffect, useState } from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Geolocation from '@react-native-community/geolocation';
import { StatusBar } from 'react-native';
import { Container, MapContainer, EstablishmentPin, EstablishmentImage } from './styles';

import api from '../../services/api'

MapboxGL.setAccessToken('pk.eyJ1IjoiY2FicmFsanYiLCJhIjoiY2s5cTd5Y3lnMGc0cjNzcnQwa2dxZmJ0MCJ9.Zbkoo7WCSnQprd0cchZd8Q');
MapboxGL.setConnected(true);
const Dashboard = () => {
  const [coordinates, setCoordinates] = useState([-49.6446024, -27.2108001]);
  const [establishments, setEstablishments] = useState([]);

  function listEstablishments() {
    api
      .get('/geo', { headers })
      .then(response => setEstablishments(response.data));
  }

  useEffect(() => {
    MapboxGL.setTelemetryEnabled(true);
    Geolocation.watchPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates([longitude, latitude]);
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 1000, maximumAge: 1000 }
    );

    //listEstablishments()
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

          {establishments.map(establishment => (
            <MapboxGL.PointAnnotation
              id={establishment.id}
              coordinate={[establishment.longitude, establishment.latitude]}
            >
              <EstablishmentPin>
                <EstablishmentImage source={{
                  uri: establishment.logo.url,
                }} />
              </EstablishmentPin>
            </MapboxGL.PointAnnotation>
          ))}
        </MapboxGL.MapView>
      </MapContainer>
    </Container>
  );
};

export default Dashboard;
