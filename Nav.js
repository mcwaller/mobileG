import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
//screens
import HomeScreen from "./screens/HomeScreen";
import StackScreen from "./screens/StackScreen";

import SettingsScreen from "./screens/SettingsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import DashboardScreen from "./screens/DashboardScreen";

const HomeStackNavigator = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ tabBarActiveTintColor: "#609966" }}
    >
      <HomeStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStackNavigator.Screen name="Stack" component={StackScreen} />
    </HomeStackNavigator.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: "#609966", headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerTintColor: "#609966",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="dashboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
