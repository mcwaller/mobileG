import React from "react";
import {
  View,
  Text,
  Stylesheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import style from "./style";
const BackgroundImage = require("../assets/mountaindew.jpg");

const AboutApp = () => {
  return (
    <ImageBackground
      source={BackgroundImage}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <Text style={style.screenSubTitle}>What is this App?</Text>
    </ImageBackground>
  );
};
export default AboutApp;
