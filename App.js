// App.js

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import HomeScreen from "./Components/Screens/HomeScreen";
import HiTvScreen from "./Components/Screens/HiTvScreen";
import PlusScreen from "./Components/Screens/PlusScreen";
import HiReelScreen from "./Components/Screens/HiReelScreen";
import ProfileScreen from "./Components/Screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ActiveIcon = ({ children }) => (
  <LinearGradient
    colors={["red", "red"]} // Use the same color for both stops to create a solid color
    style={{
      borderRadius: 25, // half of the icon size
      width: 50, // twice the icon size
      height: 50, // twice the icon size
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </LinearGradient>
);

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
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

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

            if (focused) {
              return (
                <ActiveIcon>
                  <Image source={iconName} style={{ width: 25, height: 25 }} />
                </ActiveIcon>
              );
            }

            return <Image source={iconName} style={{ width: 25, height: 25 }} />;
          },
        })}
        tabBarOptions={{
          tabBarStyle: {
            borderTopWidth: 0, // Remove default top border
          },
          tabBarItemStyle: {
            flex: 1,
          },
        }}
      >
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
