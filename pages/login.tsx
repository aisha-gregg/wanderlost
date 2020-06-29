import React, { useState } from "react";
import "react-native-gesture-handler";
const { Navigation } = require("react-native-navigation");
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, TextInput } from "react-native";


  return (
    Navigation.push(props.componentId, {
        component: {
          name: 'Settings', // Push the screen registered with the 'Settings' key
          options: { // Optional options object to configure the screen
            topBar: {
              title: {
                text: 'Settings' // Set the TopBar title of the new Screen
              }
            }
          }
        }
      });
