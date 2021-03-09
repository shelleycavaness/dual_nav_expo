import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react'
import { useContext } from 'react'
import { StyleSheet, Button, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import { View, Text } from '../components/Themed'
import { ScreenContext } from '../contexts/ScreenContext';
import Navigation from '../navigation/main/Navigation';
import axios from 'axios';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import ngrok from '../constants/ngrok';
import { CurrentUserContext, TokenContext } from '../contexts/CurrentUserContext';

export default function LoginScreen({ navigation }: { navigation: StackNavigationProp<AuthNavigationParamList> }) {

  const Inscription = () => {
        navigation.navigate("Inscription");
    }


  const screenContext = useContext(ScreenContext)
  const [email, setEmail] = useState<string>("")
  const [password, setPasswd] = useState<string>("")
  const [ErrorMessage, setErrorMessage] = useState<string>("")
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");
  const [createAccount, setCreateAccount] = useState<string>("")
  const {currentPlayerContext, setCurrentPlayerContext}  = useContext(CurrentUserContext)

  const {userToken, setUserToken } = useContext(TokenContext)


  const loginUser = async () => {
    // let response = await axios.post('http://localhost:3000/api/users/login', 
    let response = await axios.post( ngrok.Ngrok + '/api/users/login', 
      { "user": {  "email": email, "password":password } }
      )
      .then( (res: any) => {
        let token = res.data.user.token;
        _storeData(token);
        console.log('token login :>> ', token);
        setUserToken(token)   
        // setCurrentPlayerContext(res.data.user)
      })
      .catch((error:any) => {
        // Alert.alert('Response ERROR catch--- ',error.message)
        console.log('Response ERROR catch--- ',error.response)
        setErrorMessage("oops !, recheck your login or password")
        setCreateAccount('register here if you need an account')
        // setEmailErrorMessage(error.errors.emailisNotEmpty)// web errors
        // setPasswordErrorMessage(error.data.errors.passwordisNotEmpty)
        // setErrorMessage(error.data.message.error)
        // Alert.alert('error catach login', error)

      })
  }  
  //set local storage with AsyncStorage
    const _storeData = async (token: string) => {
      try {
        await AsyncStorage.setItem(
          'token',
          token
        );
    //bellow is the redirect for the next page 
    //with the context string changed to 'Main'
        if (screenContext.setCurrentScreen != undefined) {
          screenContext.setCurrentScreen('Main');
        }
       else {
          console.log('problem with current screen context')
        }
     // catch the error in saving the token    
      } catch (error) {
        // Error saving data
        Alert.alert('ERROR local storage')
        console.error('Error local storage ', error);
      }
    }

  return (

    <View style={styles.container}>
      
      <Text>Login screen</Text>
       
        <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/ios/50/000000/no-message.png'}}/>
              <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(email: string) => setEmail(email)}/>
        </View>

        {/* <Text style={styles.error}>{ passwordErrorMessage  }</Text> */}
         <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/fluent-systems-regular/24/000000/forgot-password.png'}}/>
              <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password : string) => setPasswd(password)}/>
        </View>

        {/* <Text style={styles.error}>{ ErrorMessage }</Text> */}
        <Text style={styles.error}>{ emailErrorMessage  }</Text>
        { ErrorMessage && ErrorMessage.length > 0 ? <Text style={styles.error}> { ErrorMessage }</Text> : false
       }

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={ loginUser }>
          <Text style={styles.loginText}>connect</Text>
        </TouchableOpacity>
        { createAccount && createAccount.length > 0 ? <Text style={styles.error}> { createAccount }</Text> : false
       }
        <TouchableOpacity style={styles.buttonContainer} onPress={Inscription}>
          <Text>Register here</Text>
        </TouchableOpacity>    
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      color: '#808080',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  error: {
    color: 'red',
  }
})
