import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import logo from "./assets/wanderlostlogo.svg";

export default function App() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 60 }}
        placeholder="Sign in with Google"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      ></TextInput>

      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
