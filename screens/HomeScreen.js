import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from './AuthContext'; // Importar useAuth
import style from "./style";

const BackgroundImage = require("../assets/back.jpg");
const Logo = require("../assets/prueba.png");

const HomeScreen = () => {
  const navigation = useNavigation();
  const { isLoggedIn } = useAuth(); // Obtener el estado de autenticación

  return (
    <ImageBackground
      source={BackgroundImage}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <View>
        <Text style={style.screenTitle}>Home Page</Text>
      </View>

      <Image source={Logo} style={style.image} />

      <ScrollView style={style.scrollColor}>
        <View style={style.containerView}>
          <Text style={style.containerText}>
            Welcome to this small system that focuses on monitoring plants you
            have saved here, be warned this is just a test not the actual final
            product.
          </Text>
        </View>

        {!isLoggedIn && ( // Renderizar el botón solo si el usuario no ha iniciado sesión
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
              style={{
                backgroundColor: "#609966",
                padding: 10,
                marginTop: "20%",
                width: "50%",
                alignSelf: "center",
                borderRadius: 10,
                marginBottom: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "center",
                  color: "white",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

