import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import BoardScreen from './BoardScreen';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';
import RegisterScreen from './RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';
import test from './test';



const MaterialBottomTabs =
  createMaterialBottomTabNavigator();

export default function Bottom_Navi() {
  return (
    
    <MaterialBottomTabs.Navigator barStyle={styles.tabBar}>
      <MaterialBottomTabs.Screen
        name="TabStack"
        component={BoardScreen}
        options={{
          tabBarLabel: '경매',
          tabBarIcon: 'home',
          tabBarColor: '#C9E7F8',
        }}
      >
      </MaterialBottomTabs.Screen>
      <MaterialBottomTabs.Screen
        name="TabChat"
        component={BoardScreen}
        options={{
          tabBarLabel: '내 목록',
          tabBarIcon: 'message-reply',
          tabBarColor: '#9FD5C9',
          //tabBarBadge: true,
        }}
      />    
      <MaterialBottomTabs.Screen
        name="TabContacts"
        component={ProfileScreen}
        options={{
          tabBarLabel: '프로필',
          tabBarIcon: 'contacts',
          tabBarColor: '#F7EAA2',
        }}
      />
    </MaterialBottomTabs.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
  },
});
