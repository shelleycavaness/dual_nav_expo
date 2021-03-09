import React, { useContext, useEffect, useState } from 'react'
import { Alert, FlatList, StyleSheet } from 'react-native'
import { ScrollView, Image } from 'react-native'

import { Text, View,  } from '../../components/Themed'
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getCurrentPlayerToken } from '../../services/currentUserService';
import ngrok from '../../constants/ngrok';
import axios from 'axios';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


export default function ProfileScreen() {
  const url = ngrok.Ngrok + '/api/players'
  const [username, setUsername] = useState<string>("")
  const [id, setId] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const {currentPlayerContext, setCurrentPlayerContext}  = useContext(CurrentUserContext)
  const [user, setuser] = useState({})

 let  getUsersChallenges = currentPlayerContext.courses[0].challenges
  // console.log('profile player eeeeeeeeeeeeeeeeror',currentPlayerContext);
  const seeChallenges =  getUsersChallenges && getUsersChallenges.map(item => <Text  key={item.id}>{ item.title } </Text>) 


  useEffect(()=>{
    
  }, [currentPlayerContext])
 
    return (
     <ScrollView style={styles.container}>
      <View style={styles.container} contentContainerStyle={styles.contentContainer}>
     
         <View style={styles.headerContent}>
          <Image style={styles.avatar} source={{uri: currentPlayerContext.image}}/>
          <Text style={styles.name}>  nom utilisateur: {currentPlayerContext.username} </Text>
          <Text style={styles.name}> mon email : {currentPlayerContext.email} </Text>
         </View>
        

       <View >
         <View style={styles.detailContent}>
          <Text style={styles.title}>Score</Text>
          <Text style={styles.count}>{currentPlayerContext.totalGamePoints}</Text>
         </View>
         <View style={styles.detailContent}>
          <Text style={styles.title}>Ecological Footprint Indicator</Text>
          <Text style={styles.count}>{currentPlayerContext.totalKw}</Text>
         </View>
         <View style={styles.detailContent}>
          <Text style={styles.title}>Bilan carbone, tonnes de CO2 Compensés</Text>
          <Text style={styles.count}>{currentPlayerContext.totalH2O} </Text>
         </View>
       </View>
         
      </View>
   </ScrollView>  
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#e3e3e8',  
  },
  contentContainer: {
    paddingTop: 30,
    alignItems: 'center',  
},
  headerContent:{
    paddingTop:50,
    alignItems: 'center',    
  },
  avatar: {
    width: 250,
    height: 250,
    borderRadius: 150,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#00CED1",
    fontWeight:'600',
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: "#00CED1"
  },
  count:{
    fontSize:18,
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
  image:{
    width: 200,
    height: 200,
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 30,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: "white",
  },
})