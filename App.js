import React from "react";
import Navigation from "./Nav";
import { ImageBackground } from "react-native-web";
import { AuthProvider } from "./screens/AuthContext"
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
