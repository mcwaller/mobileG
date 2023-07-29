import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import style from "./style";
const BackgroundImage = require("../assets/back.jpg");

const ProfileScreen = () => {
  return (
    <ImageBackground
      source={BackgroundImage}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <View>
        <Text style={style.screenTitle}>Profile Page</Text>
      </View>

      <View style={style.defaultContainer} elevation={5}>
        <Text style={style.title}>Log In</Text>
        <TextInput style={style.input} placeholder="email" />
        <TextInput style={style.input} placeholder="password" />

        <TouchableOpacity style={style.buttonSend}>
          <Text style={style.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default ProfileScreen;
