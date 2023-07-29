import React from "react";
import { View, Text, ImageBackground } from "react-native";
import style from "./style";
const BackgroundImage = require("../assets/mountaindew.jpg");

const Tables = () => {
  return (
    <ImageBackground
      source={BackgroundImage}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <Text style={style.screenSubTitle}>Table Screen</Text>
    </ImageBackground>
  );
};
export default Tables;
