import {NativeBaseProvider, StatusBar } from "native-base";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CartScreen from "./src/screens/CartScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import NotVerfiyScreen from "./src/screens/NotVerfiyScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import SingleProductScreen from "./src/screens/SingleProductScreen";
import OrderScreen from "./src/screens/OrderScreen";



const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown:false,
        }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="order" component={OrderScreen} />

        </Stack.Navigator>
      </NavigationContainer>  
    </NativeBaseProvider>
  );
  
}
