
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  StyleSheet
} from 'react-native';
import axios from 'axios';
import style from './style';
import { CommonActions } from '@react-navigation/native';
import { useAuth } from './AuthContext' 
const BackgroundImage = require('../assets/back.jpg');

function Login() {
  const { login } = useAuth(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    setError(null);
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      const data = response.data;

      if (data.Status === 'Success') {
        const userEmail = data.email;
        const userRole = data.role;
        console.log(userRole)
 
        await AsyncStorage.setItem('userEmail', userEmail);
        login(); 
   
        
       
        navigation.navigate('Profile');
      } else if (data.Status === null) {
        setError('Email o contraseña incorrecta');
      } else {
        setError('Ocurrió un error al iniciar sesión');
      }
    } catch (error) {
      console.log(error);
      setError('Email o contraseña incorrecta ');
    }
  };
  const handleRegister = () => {
    navigation.navigate('Registro'); // Reemplaza 'Registro' con el nombre de la pantalla de registro en tu pila de navegación
  };

  return (
    <ImageBackground
      source={BackgroundImage}
      style={{ flex: 1, resizeMode: 'cover', alignItems: 'center', justifyContent: 'center' }}
    >
      <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
        <Text style={style.screenTitle}>Login</Text>
        <View style={{ marginBottom: 10 }}>
          <Text></Text>
          <TextInput
            style={style.input}
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text></Text>
          <TextInput
            style={style.input}
            placeholder="Enter Password"
            name="password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity onPress={handleLogin} style={style.buttonSend}>
          <Text style={style.buttonText}>Login</Text>
        </TouchableOpacity>
        {error && <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>}
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.linkText}>Don't have an account?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', padding: 20, borderRadius: 10 },
  screenTitle: { fontSize: 24, marginBottom: 10 },
  inputContainer: { marginBottom: 10 },
  input: { borderWidth: 1, borderColor: 'gray', padding: 10, borderRadius: 5 },
  button: { backgroundColor: '#609966', padding: 10, width: '50%', alignSelf: 'center', borderRadius: 10, marginBottom: 15 },
  buttonText: { fontSize: 15, textAlign: 'center', color: 'white' },
  errorText: { color: 'red', marginBottom: 10 },
  linkText: { color: 'blue', textAlign: 'center' },
});

export default Login;

