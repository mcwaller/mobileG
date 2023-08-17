import React, { useEffect, useState } from "react";
import { Dimensions, ImageBackground, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProgressChartComponent from "./charts/ProgressChartComponent";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from "./AuthContext";

const BackgroundImage = require("../assets/back.jpg");

const DashboardScreen = () => {
  const navigation = useNavigation();
  const { isLoggedIn, logout } = useAuth();
  const [chartData, setChartData] = useState(null);

  const fetchDataFromMongoDB = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/datos/datos");
      const jsonData = await response.json();

      if (jsonData.length > 0) {
        const lastEntry = jsonData[jsonData.length - 1];
        const { T, RH, HUM, LUX } = lastEntry;

        // No escalamos los datos, los utilizamos directamente
        const data = {
          T: parseFloat(T),
          RH: parseFloat(RH),
          HUM: parseFloat(HUM),
          LUX: parseFloat(LUX),
        };

        // Actualizar el estado chartData con los datos del gráfico
        setChartData(data);
      } else {
        setChartData(null);
      }
    } catch (error) {
      console.error("Error al obtener los datos de MongoDB Atlas:", error);
      setChartData(null);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchDataFromMongoDB();
      const interval = setInterval(fetchDataFromMongoDB, 10000);
      return () => clearInterval(interval);
    } else {
      // Si el usuario cierra sesión, borrar los datos del Dashboard
      setChartData(null);
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    logout();
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={BackgroundImage}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <View style={{marginTop:170}}>
        <Text style={styles.screenTitle}>Dashboard Page</Text>
        {isLoggedIn ? (
          <>
            {chartData ? (
              <View>
                {/* Mostrar la gráfica solo si hay datos disponibles */}
                <ProgressChartComponent
                  data={chartData}
                  screenWidth={Dimensions.get("window").width}
                />
                <TouchableOpacity onPress={handleLogout} style={styles.button}>
                  <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.container}>
                <Text style={styles.loadingText}>Cargando datos...</Text>
              </View>
            )}
          </>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  screenTitle: { fontSize: 24, marginBottom: 10 },
  button: { backgroundColor: '#609966', padding: 10, marginTop: "2.5%", width: '50%', alignSelf: 'center', borderRadius: 10, marginBottom: 15 },
  buttonText: { fontSize: 15, textAlign: 'center', color: 'white' },
  loadingText: { textAlign: "center", marginTop: 100, fontSize: 18 },
});

export default DashboardScreen;

