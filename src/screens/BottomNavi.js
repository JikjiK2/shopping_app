import React, { useEffect, useState } from 'react';
import { StyleSheet, BackHandler, ToastAndroid, Alert } from 'react-native';
import { useToast } from 'native-base';
import BoardScreen from './BoardScreen';
import ProfileScreen from './ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserJoinActionScreen from './UserJoinActionScreen';
import UserSellerActionScreen from './UserSellerActionScreen';


const Tab = createBottomTabNavigator();

export default function Bottom_Navi({ navigation }) {
  const [exitApp, setExitApp] = useState(0);
  const toast = useToast();
  const backAction = () => {
    setTimeout(() => {
      setExitApp(0);      
    }, 2000);
    if (exitApp === 0) {
      setExitApp(exitApp + 1);
      toast.show({
        duration:2000,
        description: "'뒤로' 버튼을 한번 더 누르면 종료됩니다."
      })
    } else if (exitApp === 1) {
      BackHandler.exitApp();
    }
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  });

  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#000000",
          inactiveTintColor: "#aaaaaa",
          style: {
            borderTopWidth: 0.5,
            borderTopColor: "#e9e9e9",
            backgroundColor: "#ffffff",
          },
          labelStyle: {
            marginBottom: 3,
            fontSize: 12,
          }
        }}
      >
        <Tab.Screen
          name="경매"
          component={BoardScreen}
          options={{
            headerShown: false,
            tabBarLabel: "홈",
            tabBarIcon: ({ focused }) =>
              focused ?
                <Ionicons name="home" size={24} color="black" /> :
                <Ionicons name="home-outline" size={24} color="#aaaaaa" />

          }}
        />
        <Tab.Screen
          name="프로필"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarLabel: "프로필",
            tabBarIcon: ({ focused }) =>
              focused ?
                <Ionicons name="person" size={24} color="black" /> :
                <Ionicons name="person-outline" size={24} color="#aaaaaa" />
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
  },
});
