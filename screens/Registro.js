import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import axios from 'axios';
const BackgroundImage = require("../assets/back.jpg");

function Registro() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [username, setUsername] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [usuariosRegistrados, setUsuariosRegistrados] = useState([]);
  const [errorNombre, setErrorNombre] = useState('');
  const [errorApellido, setErrorApellido] = useState('');
  const [errorUsername, setErrorUsername] = useState('');
  const [errorDireccion, setErrorDireccion] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorTelefono, setErrorTelefono] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmarPassword, setErrorConfirmarPassword] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/usuario/obtenerusuarios')
      .then((res) => {
        setUsuariosRegistrados(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function validarFormulario() {
    let isValid = true;

    setErrorNombre('');
    setErrorApellido('');
    setErrorUsername('');
    setErrorDireccion('');
    setErrorEmail('');
    setErrorTelefono('');
    setErrorPassword('');
    setErrorConfirmarPassword('');

    if (!nombre) {
      setErrorNombre('Ingrese su nombre');
      isValid = false;
    }

    if (!apellido) {
      setErrorApellido('Ingrese su apellido');
      isValid = false;
    }

    if (!username) {
      setErrorUsername('Ingrese su nombre de usuario');
      isValid = false;
    }

    if (!direccion) {
      setErrorDireccion('Ingrese su dirección');
      isValid = false;
    }

    if (!email) {
      setErrorEmail('Ingrese su email');
      isValid = false;
    }

    if (!telefono) {
      setErrorTelefono('Ingrese su teléfono');
      isValid = false;
    }

    if (!password) {
      setErrorPassword('Ingrese su contraseña');
      isValid = false;
    }

    if (password !== confirmarPassword) {
      setErrorConfirmarPassword('Las contraseñas no coinciden');
      isValid = false;
    }

    return isValid;
  }

  function agregarusuario() {
    if (!validarFormulario()) {
      return;
    }

    var usuario = {
      nombre: nombre,
      apellido: apellido,
      username: username,
      direccion: direccion,
      email: email,
      telefono: telefono,
      password: password,
      
    };

    const usuarioDuplicado = usuariosRegistrados.find(
      (usuario) => usuario.email === email
    );
    if (usuarioDuplicado) {
      alert('Este usuario ya está registrado');
      return;
    }

    axios
      .post('http://localhost:5000/api/usuario/agregarusuario', usuario)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleRegister = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView>
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <View style={styles.defaultContainer}>
        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.errorText}>{errorNombre}</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={nombre}
            onChangeText={(text) => setNombre(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.errorText}>{errorApellido}</Text>
          <TextInput
            style={styles.input}
            placeholder="Apellido"
            value={apellido}
            onChangeText={(text) => setApellido(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.errorText}>{errorUsername}</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre de Usuario"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.errorText}>{errorDireccion}</Text>
          <TextInput
            style={styles.input}
            placeholder="Dirección"
            value={direccion}
            onChangeText={(text) => setDireccion(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.errorText}>{errorEmail}</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.errorText}>{errorTelefono}</Text>
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            value={telefono}
            onChangeText={(text) => setTelefono(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.errorText}>{errorPassword}</Text>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.errorText}>{errorConfirmarPassword}</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirmar Contraseña"
            value={confirmarPassword}
            onChangeText={(text) => setConfirmarPassword(text)}
            secureTextEntry
          />
        </View>

        <TouchableOpacity onPress={agregarusuario} style={styles.button}>
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.linkText}>¿Ya tienes una cuenta?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  defaultContainer: { backgroundColor: 'white', padding: 20, borderRadius: 10 },
  title: { fontSize: 24, marginBottom: 10 },
  inputContainer: { marginBottom: 10 },
  input: { borderWidth: 1, borderColor: 'gray', padding: 10, borderRadius: 5 },
  button: { backgroundColor: '#609966', padding: 10, width: '50%', alignSelf: 'center', borderRadius: 10, marginBottom: 15 },
  buttonText: { fontSize: 15, textAlign: 'center', color: 'white' },
  errorText: { color: 'red', marginBottom: 5 },
  linkText: { fontSize: 12, textAlign: 'center' },
});

export default Registro;


