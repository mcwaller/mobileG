import React from "react";
import { View, Text, Stylesheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "20%",
          color: "#40513B",
        }}
      >
        Home Page
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Stack");
        }}
        style={{
          backgroundColor: "#609966",
          padding: 10,
          marginTop: "20%",
          width: "50%",
          alignSelf: "center",
          borderRadius: 10,
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
  );
};
export default HomeScreen;
