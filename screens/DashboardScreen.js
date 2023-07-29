import React from "react";
import {
  View,
  Text,
  Stylesheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import style from "./style";
const BackgroundImage = require("../assets/back.jpg");

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={BackgroundImage}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <View>
        <Text style={style.screenTitle}>Dashboard Page</Text>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Table");
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
              Tablas
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default DashboardScreen;
