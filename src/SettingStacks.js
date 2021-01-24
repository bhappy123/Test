import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from './screens/Settings';
const SettingStacks = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerTitle: 'Setting Screen'}}
      />
    </Stack.Navigator>
  );
};

export default SettingStacks;

const styles = StyleSheet.create({});
