import React, { useState } from 'react'
import { Alert, Image, StyleSheet, TextInput, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
// import { View, Text } from '../components/Themed'
import axios from 'axios';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import ngrok from '../constants/ngrok';

export default function RegisterScreen({navigation}: {navigation :any }) {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const [success, setSuccess] = useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState<string>("")

  const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");

  
  const signUp = async () => {
    // let response = await axios.post('http://localhost:3000/api/register', // http: works only with web
    //use ngrok for the https
    // let response = await axios.post('https://9fa09fbac547.ngrok.io/api/register', 
    let response = await axios.post( ngrok.Ngrok +'/api/register', 

      { "user": {  "email": email, "password":password, "username" : username } }
    ) 
    .then( (res: any) => {
      Alert.alert('everything worked now go to the login page')
      let userId = res.data.user.id;
      console.log('user login id:>> ', res.data.user.id);
      if(userId != undefined){
          console.log('yeah its here :>> ');
          // axios.put( ​ngrok.Ngrok + '/api​/user​/' + userId + '​/course​/3/​add',{user})
          axios.put( ngrok.Ngrok + '/api/user/'+userId +'/course/3/add')
          
        }
      })
    .catch((error:any) => {
      console.log('catch ====== ', error.response.data.errors.username)
      setEmailErrorMessage(error.response.data.errors.emailisNotEmpty)
      // setPasswordErrorMessage(error.response.data.errors.passwordisNotEmpty)
       setUsernameErrorMessage(error.response.data.errors.username)
      // setEmailErrorMessage(error.errors.emailisNotEmpty)
      // setPasswordErrorMessage(error.errors.passwordisNotEmpty)
      // setUsernameErrorMessage(error.errors.usernameisNotEmpty)
    })
  }

    return (
      <View style={styles.container}>
              <Text>register here</Text>
   <Text > {emailErrorMessage}</Text>
     <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/ios/50/000000/user-female-circle.png'}}/>
        <TextInput style={styles.inputs}
            placeholder="Username"
            underlineColorAndroid='transparent'
            onChangeText={(username : string) => setUsername(username)}/>
      </View>

      {usernameErrorMessage && usernameErrorMessage.length >0 ?   
      <Text style={styles.error}>{ usernameErrorMessage  }</Text> : false
        }
        
      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/ios/50/000000/no-message.png'}}/>
        <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            // errorMessage={emailErrorMessage}
            onChangeText={(email: string) => setEmail(email)}/>
      </View>

      {/* <Text style={styles.error}> { passwordErrorMessage  }</Text> */}
      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/fluent-systems-regular/24/000000/forgot-password.png'}}/>
        <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password : string) => setPassword(password)}/>
      </View>

     

    <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={ signUp }>
        <Text style={styles.loginText}>Inscription screen</Text>
      </TouchableOpacity>

 
    </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDE2BB',
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
