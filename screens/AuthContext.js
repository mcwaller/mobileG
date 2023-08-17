import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función para verificar el estado de autenticación al cargar la aplicación
  useEffect(() => {
    AsyncStorage.getItem('isLoggedIn')
      .then(value => {
        setIsLoggedIn(JSON.parse(value) || false); // Convertir el valor almacenado a un booleano
      })
      .catch(error => console.log(error));
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    AsyncStorage.setItem('isLoggedIn', JSON.stringify(true)); // Almacenar el estado de autenticación en AsyncStorage
  };

  const logout = () => {
    setIsLoggedIn(false);
    AsyncStorage.setItem('isLoggedIn', JSON.stringify(false)); // Almacenar el estado de autenticación en AsyncStorage
  };

  const authContextValue = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
