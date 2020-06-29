import React, { useState } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import logo from "./assets/wanderlostlogo.svg";
import { NavigationContainer } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

function Login() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 60 }}
        placeholder="Sign in with Google"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      ></TextInput>

      <Text>WanderLost</Text>
      <Text>Discover Wonders</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
