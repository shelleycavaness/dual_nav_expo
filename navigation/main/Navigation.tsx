import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { useContext } from 'react';
import { ColorSchemeName } from 'react-native';
import { ScreenContext } from '../../contexts/ScreenContext';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from '../LinkingConfiguration';
import MainNavigation from './MainNavigation';
import RootNavigator from '../RootNavigator';
import AuthNavigation from '../auth/AuthNavigation';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const screenContext = useContext(ScreenContext);
  console.log("context:", screenContext.currentScreen);
  if (screenContext.currentScreen == 'Auth') {
    return (
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator childComponent={AuthNavigation} />
      </NavigationContainer>
    );
  }
  else if (screenContext.currentScreen == 'Main') {
    return (
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator childComponent={MainNavigation} />
      </NavigationContainer>
    );
  }
  else {
    return (
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator childComponent={AuthNavigation} />
      </NavigationContainer>
    );
  }


}



