import React from "react";
import "react-native-gesture-handler";
import { Button } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import Logo from "./logo.svg";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export function Login() {
  return (
    <View style={styles.container}>
      <Logo></Logo>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 40,
        }}
      >
        WanderLost
      </Text>
      <Text style={{ marginBottom: 60 }}>Discover Wonders</Text>
      <Button title="Sign in with Google" type="outline" />
    </View>
  );
}
