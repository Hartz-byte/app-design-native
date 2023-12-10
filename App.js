import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, Text, View, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import * as StatusBarHeight from "react-native-status-bar-height";

import HomeScreen from "./Components/Screens/HomeScreen";
import HiTvScreen from "./Components/Screens/HiTvScreen";
import PlusScreen from "./Components/Screens/PlusScreen";
import HiReelScreen from "./Components/Screens/HiReelScreen";
import ProfileScreen from "./Components/Screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Active icon properties
const ActiveIcon = ({ children, label, focused }) => (
  <LinearGradient
    colors={focused ? ["red", "red"] : ["transparent", "transparent"]}
    style={{
      borderRadius: 25,
      width: 50,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      marginTop: focused ? -30 : 0,
    }}
  >
    <LinearGradient
      colors={["rgba(255, 255, 255, 0.60)", "rgba(255, 255, 255, 0.20)"]}
      style={{
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
      <Text style={{ color: "black", marginTop: 5, fontSize: 12 }}>
        {label}
      </Text>
    </LinearGradient>
  </LinearGradient>
);

// Home stack
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    // Navigation
    <NavigationContainer>
      {/* Status bar with gradient color */}
      <View
        style={{
          height: StatusBarHeight.currentHeight,
          backgroundColor: "transparent",
        }}
      >
        <LinearGradient
          colors={["#78CEE2", "#01968B"]}
          style={{ flex: 1, paddingTop: Constants.statusBarHeight }}
        >
          <StatusBar translucent backgroundColor="transparent" />
        </LinearGradient>
      </View>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            // Icons and selections
            if (route.name === "Home") {
              iconName = focused
                ? require("./assets/house.png")
                : require("./assets/house.png");
            } else if (route.name === "HiTv") {
              iconName = focused
                ? require("./assets/devices.png")
                : require("./assets/devices.png");
            } else if (route.name === "Plus") {
              iconName = focused
                ? require("./assets/Upload.png")
                : require("./assets/Upload.png");
            } else if (route.name === "HiReel") {
              iconName = focused
                ? require("./assets/video.png")
                : require("./assets/video.png");
            } else if (route.name === "Profile") {
              iconName = focused
                ? require("./assets/usersquare.png")
                : require("./assets/usersquare.png");
            }

            // Focussed icon
            return (
              <ActiveIcon focused={focused} label={route.name}>
                <Image source={iconName} style={{ width: 25, height: 25 }} />
              </ActiveIcon>
            );
          },
        })}
        tabBarOptions={{
          tabBarStyle: {
            borderTopWidth: 0,
          },
          tabBarItemStyle: {
            flex: 1,
          },
          showLabel: false, // hide the title
        }}
      >
        {/* Tab's screen and its properties */}
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="HiTv"
          component={HiTvScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Plus"
          component={PlusScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="HiReel"
          component={HiReelScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
