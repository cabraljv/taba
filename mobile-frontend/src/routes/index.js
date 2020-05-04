import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import UserProfile from '../pages/UserProfile';
import EstablishmentProfile from '../pages/EstablishmentProfile';

import Cart from '../pages/Cart';

import Dashboard from '../pages/Dashboard';
import AppointmentScheduler from '../pages/AppointmentScheduler';

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#dedede' },
    }}
    initialRouteName="SignIn"
  >
    <Auth.Screen name="UserProfile" component={UserProfile} />
    <Auth.Screen name="EstablishmentProfile" component={EstablishmentProfile} />
    <Auth.Screen name="Cart" component={Cart} />

    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />

    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="AppointmentScheduler" component={AppointmentScheduler} />
  </Auth.Navigator>
);

export default AuthRoutes;
