import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Settings, StyleSheet } from 'react-native'
import RegisterScreen from '../../screens/InscriptionScreen';
import LoginScreen from '../../screens/LoginScreen';
const AuthStack = createStackNavigator<AuthNavigationParamList>();

export default function AuthNavigation() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="login"
                component={LoginScreen}
                options={{ headerTitle: 'login' }}
            />
            <AuthStack.Screen
                name="Inscription"
                component={RegisterScreen}
                options={{ headerTitle: 'Inscription' }}
            />

            <AuthStack.Screen
                name="Introduction"
                component={LoginScreen}
                options={{ headerTitle: 'Introduction' }}
            />

        </AuthStack.Navigator>
    )
}

const styles = StyleSheet.create({})
