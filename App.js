import { NativeBaseProvider, StatusBar } from "native-base";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import CartScreen from "./src/screens/CartScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
// import NotVerfiyScreen from "./src/screens/NotVerfiyScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import SingleProductScreen from "./src/screens/SingleProductScreen";
import MainScreen from "./src/screens/MainScreen";



import TestScreen from "./src/screens/BottomNavi";
import BoardScreen from "./src/screens/BoardScreen";
import IdResultScreen from "./src/screens/IdResultScreen";
import IdSearchScreen from "./src/screens/IdSearchScreen";
import PwSearchScreen from "./src/screens/PwSearchScreen";
import Bottom_Navi from "./src/screens/BottomNavi";
import ProductRegisterScreen from "./src/screens/ProductRegisterScreen";
import Testa from "./src/screens/test";
import SetItemsForms from "./src/screens/SetItemsForms";
import SettingScreen from "./src/screens/SettingScreen";
import QAScreen from "./src/screens/QAScreen";
import MoneyScreen from "./src/screens/MoneyScreen";
import MoneyOutScreen from "./src/screens/MoneyOutScreen";

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <>
      <NativeBaseProvider>
        
        <NavigationContainer>
          <StatusBar hidden={false} />
          <Stack.Navigator
            initialRouteName="Bottom_Navi"
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
            <Stack.Screen name="ID_Search" component={IdSearchScreen} />
            <Stack.Screen name="PW_Search" component={PwSearchScreen} />
            <Stack.Screen name="Bottom_Navi" component={Bottom_Navi} />
            <Stack.Screen name="ID_Result" component={IdResultScreen} />
            <Stack.Screen name="SetItem" component={SetItemsForms} />
            <Stack.Screen name="Setting" component={SettingScreen} />
            <Stack.Screen name="QA" component={QAScreen} />
            <Stack.Screen name="Money" component={MoneyScreen} />
            <Stack.Screen name="MoneyOut" component={MoneyOutScreen} />
            <Stack.Screen name="ProductR" component={ProductRegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>

        {/* <ProfileScreen/> */}
        
      </NativeBaseProvider>
      
    </>
  );

}
