import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.flex}>
        <Text>Hi News</Text>
        <View style={styles.flex}>
          <TouchableOpacity>
            <Image source={require("../../assets/Search.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.soundIcon}>
            <Image source={require("../../assets/sound.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 40,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  soundIcon: {
    marginLeft: 15,
  },
});

export default HomeScreen;
