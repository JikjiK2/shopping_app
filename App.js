import { NativeBaseProvider, StatusBar, KeyboardAvoidingView } from "native-base";
import React from "react";
import { Keyboard } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import CartScreen from "./src/screens/CartScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import NotVerfiyScreen from "./src/screens/NotVerfiyScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import SingleProductScreen from "./src/screens/SingleProductScreen";
import OrderScreen from "./src/screens/OrderScreen";
import MainScreen from "./src/screens/MainScreen";
import review from "./src/screens/BoardScreen";

import { List } from 'react-native-paper';

import { isConstTypeReference } from "typescript";

const Stack = createNativeStackNavigator()

import TestScreen from "./src/screens/TestScreen";
import BoardScreen from "./src/screens/BoardScreen";



export default function App() {
  return (
    <>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar hidden={true} />
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Board" component={BoardScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Single" component={SingleProductScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>

    </>
  );

}
