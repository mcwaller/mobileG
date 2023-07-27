import React from "react";
import {
  View,
  Text,
  Stylesheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import style from "./style";

const ProfileScreen = () => {
  return (
    <>
      <View>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            marginTop: "20%",
            marginBottom: "20%",
          }}
        >
          Profile Page
        </Text>
      </View>

      <View style={style.defaultContainer} elevation={5}>
        <Text style={style.title}>Log In</Text>
        <TextInput style={style.input} placeholder="email" />
        <TextInput style={style.input} placeholder="password" />

        <TouchableOpacity style={style.buttonSend}>
          <Text style={style.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default ProfileScreen;
