import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet } from 'react-native'
import AcceptChallengeScreen from '../../../screens/homeTab/AcceptChallengeScreen';
import ChallengeListScreen from '../../../screens/homeTab/ListChallenges';

import ProfileScreen from '../../../screens/homeTab/ProfileScreen';
// import TabOneScreen from '../../../screens/TabOneScreen';
import { HomeTabParamList } from '../../../types/Navigation/main/tabs/HomeTabParamList';
const HomeTabStack = createStackNavigator<HomeTabParamList>();

export default function HomeNavigator() {
    return (
        <HomeTabStack.Navigator screenOptions={{headerShown: true,}}>
            <HomeTabStack.Screen
                name="AcceptChallengeScreen"
                component={AcceptChallengeScreen}
                options={{ headerTitle: 'AcceptChallengeScreen' }}
            />
            <HomeTabStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerTitle: 'ProfileScreen' }}
            />
            <HomeTabStack.Screen
                name="ListChallengeScreen"
                component={ChallengeListScreen}
                options={{ headerTitle: 'ListChallengeScreen' }}
            />

        </HomeTabStack.Navigator>
    )
}

const styles = StyleSheet.create({})
