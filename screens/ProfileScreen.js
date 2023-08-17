import React, { useState, useEffect } from "react";
import { 
    View, 
    Text, 
    TextInput, 
    Image, 
    StyleSheet, 
    TouchableOpacity,
    ImageBackground
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useAuth } from "./AuthContext";  // <- Importación del contexto
const BackgroundImage = require('../assets/back.jpg');


const ProfileScreen = () => {
    const { isLoggedIn, logout } = useAuth();  // <- Usar la lógica de autenticación
    const [userEmail, setUserEmail] = useState('');

    const [currentName, setCurrentName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        (async () => {
            const storedEmail = await AsyncStorage.getItem('userEmail');
            if (storedEmail) {
                setUserEmail(storedEmail);
                
                axios.get(`http://localhost:5000/api/usuario/usuario/${storedEmail}`)
                    .then(response => {
                        const user = response.data;
                        setCurrentName(user.nombre || '');
                        setLastName(user.apellido || '');
                        setUsername(user.username || '');
                        setEmail(user.email || '');
                        setPhoneNumber(user.telefono || '');
                        setAddress(user.direccion || '');
                    })
                    .catch(error => {
                        console.error('Error obteniendo datos del usuario:', error);
                    });
            }
        })();
    }, []);

    const handleSave = () => {
        const userProfileData = {
            email: userEmail,
            nombre: currentName,
            apellido: lastName,
            username: username,
            telefono: phoneNumber,
            direccion: address
        }

        axios.put('http://localhost:5000/api/usuario/update', userProfileData)
            .then(response => {
                console.log('Perfil actualizado con éxito:', response.data);
            })
            .catch(error => {
                console.error('Error actualizando el perfil:', error);
            });
    };

    const handleDeleteFields = () => {
      if (window.confirm("¿Estás seguro de que quieres borrar la información?")) {
          const fieldsToDelete = [];
          if (!username) fieldsToDelete.push('username');
          if (!lastName) fieldsToDelete.push('apellido');
          if (!phoneNumber) fieldsToDelete.push('telefono');
          if (!address) fieldsToDelete.push('direccion');
  
          if (fieldsToDelete.length === 0) {
              console.log('No hay campos vacíos para eliminar');
              return;
          }
  
          axios.delete('http://localhost:5000/api/usuario/delete', {
              data: {
                  email: userEmail,
                  fields: fieldsToDelete
              }
          })
              .then(response => {
                  console.log('Campos borrados con éxito:', response.data);
                  if (fieldsToDelete.includes('username')) setUsername('');
                  if (fieldsToDelete.includes('apellido')) setLastName('');
                  if (fieldsToDelete.includes('telefono')) setPhoneNumber('');
                  if (fieldsToDelete.includes('direccion')) setAddress('');
              })
              .catch(error => {
                  console.error('Error al borrar los campos:', error);
              });
      }
  };
  

    const handleLogoutButton = () => {
        logout();  // Llamar a logout del AuthContext
    };

    const handleCancel = () => {
    console.log('Acción de cancelar ejecutada');
};


    return (
      <ImageBackground 
          source={BackgroundImage} 
          style={{ flex: 1, resizeMode: "cover" }}
      >
          <View style={styles.container}>
              <Text style={styles.screenTitle}>Profile</Text>
              {isLoggedIn ? (
                <>
                  <Image 
                     
                      source={{ uri: '/assets/images/avatars/awwogga.jpg' }} 
                      style={styles.avatar}
                  />
                  <TouchableOpacity style={styles.button} onPress={handleLogoutButton}>
                        <Text style={styles.buttonText}>Cerrar sesión</Text>
                    </TouchableOpacity>

                  <View style={styles.inputContainer}>
                      <TextInput 
                          value={currentName} 
                          onChangeText={setCurrentName}
                          placeholder="Nombre"
                          style={styles.input}
                      />
                      <TextInput 
                          value={lastName} 
                          onChangeText={setLastName}
                          placeholder="Apellido"
                          style={styles.input}
                      />
                      <TextInput 
                          value={username} 
                          onChangeText={setUsername}
                          placeholder="Username"
                          style={styles.input}
                      />
                      <TextInput 
                          value={email} 
                          onChangeText={setEmail}
                          placeholder="Email"
                          style={styles.input}
                      />
                      <TextInput 
                          value={address} 
                          onChangeText={setAddress}
                          placeholder="Dirección"
                          style={styles.input}
                      />
                      <TextInput 
                          value={phoneNumber} 
                          onChangeText={setPhoneNumber}
                          placeholder="Número de Teléfono"
                          keyboardType="numeric"
                          maxLength={10}
                          style={styles.input}
                      />
                  </View>
                  <TouchableOpacity style={styles.button} onPress={handleSave}>
                      <Text style={styles.buttonText}>Guardar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={handleDeleteFields}>
                      <Text style={styles.buttonText}>Eliminar campos</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={handleCancel}>
                      <Text style={styles.buttonText}>Cancelar</Text>
                  </TouchableOpacity>
                </>
              ) : (
                  <Text>Por favor, inicie sesión para ver esta página.</Text>
              )}
          </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
      borderRadius: 10,
      backgroundColor: 'white'
  },
  screenTitle: {
      fontSize: 24, 
      marginBottom: 10,
      textAlign: 'center'
  },
  avatar: {
      width: 100,
      height: 100,
      marginBottom: 20,
      alignSelf: 'center'
  },
  inputContainer: {
      marginBottom: 10,
  },
  input: {
      width: "100%",
      padding: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      marginBottom: 10
  },
  button: {
      backgroundColor: '#609966', 
      padding: 10, 
      width: '50%', 
      alignSelf: 'center', 
      borderRadius: 10, 
      marginBottom: 15
  },
  buttonText: {
      fontSize: 15, 
      textAlign: 'center', 
      color: 'white'
  }
});

export default ProfileScreen;