import React from "react";
import { View, Text, Stylesheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        Dashboard Page
      </Text>
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
  );
};
export default DashboardScreen;
