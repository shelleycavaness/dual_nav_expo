import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Settings, StyleSheet } from 'react-native'
import SettingsScreen from './SettingsScreen';
import FelicitationScreen from '../../screens/homeTab/FelicitationScreen';
import DommageScreen from '../../screens/homeTab/DommageScreen';
import BottomTabNavigator from './BottomTabNavigator';
const MainStack = createStackNavigator<MainNavigationParamList>();

export default function MainNavigation() {
    return (
        <MainStack.Navigator screenOptions={{headerShown: false,}}>
            <MainStack.Screen
                name="BottomTab"
                component={BottomTabNavigator}
                options={{ headerTitle: '' }}
            />
            <MainStack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ headerTitle: '' }}
            />
            <MainStack.Screen
            name="Felicitation"
            component={FelicitationScreen}
            options={{ headerTitle: '' }}
          />
          <MainStack.Screen
                name="Dommage"
                component={DommageScreen}
                options={{ headerTitle: '' }}
            />

        </MainStack.Navigator>
    )
}

const styles = StyleSheet.create({})
