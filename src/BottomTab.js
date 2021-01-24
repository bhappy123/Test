import React from 'react';
import {StyleSheet, BackHandler} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import HomeStacks from './HomeStacks';
import SettingStacks from './SettingStacks';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  function handleBackButton() {
    BackHandler.exitApp();
    return true;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        options={{
          activeTintColor: '#333',
          showLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStacks}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Feather name="home" color="#333" size={24} />
            ),
          }}
          listeners={{
            focus: () =>
              BackHandler.addEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
            blur: () =>
              BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingStacks}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color}) => (
              <Feather name="settings" color="#333" size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
