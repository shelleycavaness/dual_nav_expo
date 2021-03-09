import React, {createContext, useState, useEffect} from 'react';

export const CurrentUserContext = createContext<any>({})

//set the user as a context
export default function CurrentUserProvider (props:any){
  const [currentPlayerContext, setCurrentPlayerContext] = useState()  
  return <CurrentUserContext.Provider value={{currentPlayerContext, setCurrentPlayerContext}}>  
    {props.children}
    </CurrentUserContext.Provider>  
} 

//set the user token as a context
export const TokenContext = createContext<{userToken: any, setUserToken: any}>({userToken:null, setUserToken:null})

export function UserTokenProvider (props :any){
  const [userToken, setUserToken] = useState()
  return <TokenContext.Provider value={{userToken, setUserToken}}>  
  {props.children}
  </TokenContext.Provider>  

}