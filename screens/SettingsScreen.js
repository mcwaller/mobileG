import React from "react";
import { Text, ImageBackground } from "react-native";
import style from "./style";
const BackgroundImage = require("../assets/back.jpg");

const SettingsScreen = () => {
  return (
    <ImageBackground
      source={BackgroundImage}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <Text style={style.screenTitle}>Settings Page</Text>
    </ImageBackground>
  );
};
export default SettingsScreen;
