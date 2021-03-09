import { createStackNavigator } from '@react-navigation/stack';
import React, { Component, FunctionComponent } from 'react'
import { StyleSheet } from 'react-native'
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types/Navigation/RootStackParamList';
import BottomTabNavigator from './main/BottomTabNavigator';
const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator({ childComponent }: { childComponent: FunctionComponent }) {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Root" component={childComponent} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </Stack.Navigator>
    )

}

const styles = StyleSheet.create({})
