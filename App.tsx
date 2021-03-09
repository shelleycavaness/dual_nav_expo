import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScreenContext } from './contexts/ScreenContext';
import CurrentUserProvider,  { CurrentUserContext, UserTokenProvider, TokenContext } from './contexts/CurrentUserContext'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation/main/Navigation';
import {getCurrentUser} from './services/currentUserService';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [currentScreen, setCurrentScreen] = useState<CurrentScreen>('Auth');
  const { currentPlayerContext, setCurrentPlayerContext }  = React.useContext(CurrentUserContext)
  const { userToken, setUserToken } = useContext(TokenContext)

  // useEffect(() => {
  //   async function fetchProfile(){
  //       try{
  //        let profileData = await getCurrentUser()
  //         console.log('5555555555555555', profileData.profile)
  //         // setUserToken(profileData.profile)
  //       } catch(err){
  //         console.log('err in fetchCurrentUser  app here      ╮(─▽─)╭       :>> ', err);
  //       }  
  //     }
  //     fetchProfile()  
  //   console.log('usertoken ===============================:>> ', userToken);
  // }, [])

  // useEffect( ()=>{
  //   setUserToken('kkk')

  // }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <CurrentUserProvider>
          
        <UserTokenProvider>
          <ScreenContext.Provider value={{ currentScreen, setCurrentScreen }} >
            <Navigation colorScheme={colorScheme} />
          </ScreenContext.Provider>
        </UserTokenProvider>

        </CurrentUserProvider>

        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
