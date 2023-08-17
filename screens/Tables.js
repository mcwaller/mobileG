import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Table, Row } from "react-native-table-component";
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from "./style";
const BackgroundImage = require("../assets/mountaindew.jpg");

import { useAuth } from './AuthContext'; // Importamos useAuth para acceder al estado isLoggedIn

const Tables = ({ navigation }) => {
  const [tableData, setTableData] = useState([]);
  const { isLoggedIn, login } = useAuth(); // Obtenemos el estado isLoggedIn y la función login de useAuth

  const fetchDataFromApi = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/datos/datos');
      const jsonData = await response.json();
      setTableData(jsonData);
      console.log(jsonData, 'error'); // Verificar los datos en la consola
    } catch (error) {
      console.error("Error al obtener los datos desde la API:", error);
      setTableData([]);
    }
  };

  useEffect(() => {
    // Verificar si el usuario ha iniciado sesión
    AsyncStorage.getItem('isLoggedIn')
      .then(value => {
        if (value === 'true') {
          login(); 
        }
      })
      .catch(error => console.log(error));

    fetchDataFromApi();
  }, []);

  // Define los nombres de las columnas
  const tableHead = ["DATE_TIME", "T", "RH","HUM", "LUX"];

  // Convierte los datos en un arreglo de arreglos para la tabla
  const tableDataArray = tableData.map((data) => [
    data.DATE_TIME,
    data.T,
    data.RH,
    data.HUM,
    data.LUX,
  ]);

  return (
    <ImageBackground
      source={BackgroundImage}
      style={{ flex: 1, resizeMode: "cover" }}
    >  
      {isLoggedIn ? ( // Mostrar la tabla si el usuario ha iniciado sesión
        <View style={style.container}>
          {tableData.length > 0 ? (
            <View>
              <Table borderStyle={styles.tableBorder}>
                {/* Crea el encabezado de la tabla */}
                <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                {/* Crea las filas de la tabla */}
                {tableDataArray.map((rowData, index) => (
                  <Row key={index} data={rowData} style={[styles.row, index % 2 && { backgroundColor: "#F7F6E7" }]} textStyle={styles.text} />
                ))}
              </Table>
            </View>
          ) : (
            <Text style={styles.loadingText}>Cargando datos...</Text>
          )}
        </View>
      ) : (
        <View style={style.container}>
          <Text style={styles.loadingText}>Por favor inicia sesión para ver esta pantalla.</Text>
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  row: { height: 40 },
  loadingText: { textAlign: "center", marginTop: 100, fontSize: 18 },
  tableBorder: { borderWidth: 1, borderColor: "#C1C0B9" },
});

export default Tables;
