import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: "40%",
    marginTop: "100%",
  },
});

export default ProfileScreen;
