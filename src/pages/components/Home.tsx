import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export function Home() {
  return <View style={styles.container}></View>;
}
