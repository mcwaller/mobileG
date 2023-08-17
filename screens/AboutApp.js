import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Stylesheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import style from "./style";
import AsyncStorage from '@react-native-async-storage/async-storage';


const BackgroundImage = require("../assets/mountaindew.jpg");

const AboutApp = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Obtener el correo electrónico almacenado en AsyncStorage al cargar la pantalla
    AsyncStorage.getItem('userEmail')
      .then(email => {
        if (email) {
          setUserEmail(email);
        }
      })
      .catch(error => console.log(error));
  }, []); 

   // Función para realizar el logout
   const handleLogout = async () => {
    // Eliminar el correo electrónico almacenado en AsyncStorage
    await AsyncStorage.removeItem('userEmail');
    // Redireccionar al usuario a la pantalla de login
    navigation.replace('Login');
  };



  return (
    <ImageBackground

      source={BackgroundImage}
      style={{ flex: 1, resizeMode: "cover" }}
    >  
      <TouchableOpacity onPress={handleLogout} style={style.buttonSend}>
        <Text style={style.buttonText}>Logout</Text>
      </TouchableOpacity>
      <Text style={style.screenSubTitle}>What is this App?</Text>
      <Text>Welcome, {userEmail}!</Text>
    </ImageBackground>
  );
};
export default AboutApp;
