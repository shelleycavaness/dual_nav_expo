import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import TabBarIcon from '../../components/TabBarIcon';
import { BottomTabParamList } from '../../types/Navigation/main/BottomTabParamList';
import HomeNavigator from './tabs/HomeNavigator';
import ProfileScreen from '../../screens/homeTab/ProfileScreen';
import ChallengeListScreen from '../../screens/homeTab/ListChallenges';
// import StatsNavigator from './tabs/StatsNavigator';
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="ProfilScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="ChallengeListScreen"
        component={ChallengeListScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-leaf" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}






