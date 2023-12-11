import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Headlights = () => {
  return (
    <View style={styles.container}>
      <Text>Headlights Page</Text>
    </View>
  );
};

export default Headlights;

const styles = StyleSheet.create({
  container: {
    marginLeft: "40%",
    marginTop: "80%",
  },
});
