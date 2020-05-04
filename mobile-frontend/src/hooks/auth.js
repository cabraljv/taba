import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    async function loadStoragedData() {
      const [token, user] = await AsyncStorage.multiGet(['@Taba:token', '@Taba:user']);

      if(token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      return {};
    }

    loadStoragedData();
  }, []);

  const [data, setData] = useState(() => {

  });

  const signIn = useCallback(async ({ email, password}) => {
    const response = await api.post('/session', {
      email,
      password,
    });

    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ['@Taba:token', token],
      ['@Taba:user', JSON.stringify(user)],
    ]);

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@GoBarber:user', '@GoBarber:token']);

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth must be used from within an AuthProvider');
  }

  return context;
}
