import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import style from "./style";
const BackgroundImage = require("../assets/back.jpg");
const Logo = require("../assets/prueba.png");
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={BackgroundImage}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <View>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            marginTop: "30%",
            color: "#40513B",
          }}
        >
          Home Page
        </Text>
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

        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("About");
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
              Mas Info
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default HomeScreen;
/* Render Error Image: asset with ID "19" could not be found. Please check the image source or packager */
