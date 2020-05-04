import 'react-native-gesture-handler';

import React from 'react';
import './config/ReactotronConfig';

import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';

import AppProvider from './hooks'

import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <AppProvider>
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
