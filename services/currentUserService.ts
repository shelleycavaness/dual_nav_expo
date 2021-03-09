import React, { useContext, useEffect } from 'react'

import ngrok from '../constants/ngrok'
const url =  'http://localhost:3000/api/profiles/she'
const url2 =  'http://localhost:3000/api/player'
import axios from 'axios';

//get the token from the context where the function will be called.
 export default function getCurrentPlayerWithToken(token:string) {
   return axios.get(ngrok.Ngrok + '/api/player', {
    headers: {
      'Authorization': `token ${token}`
      }
    })
 }


 export  function getCurrentUser(){
  const  profile =  fetch(ngrok.Ngrok + '/api/profiles/gaby') 
  .then((reponse) => reponse.json())
  .then( (responseJson) =>  {
      return responseJson
     })
  .catch((error) => console.error('error in catch ----------',error))
  // console.log('profile &&&&&&&&&&&&&&&&&&&& :>> ', profile);
  return profile
 }