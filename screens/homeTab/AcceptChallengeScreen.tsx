import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, Image, Alert, Text, View } from 'react-native'
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { CurrentUserContext, TokenContext } from '../../contexts/CurrentUserContext';
import axios from 'axios';
import ngrok from '../../constants/ngrok'
import getCurrentPlayerWithToken, { getCurrentUser } from '../../services/currentUserService';


export default function AcceptChallengeScreen({ navigation }) {
  const {userToken } = useContext(TokenContext)
  const {currentPlayerContext, setCurrentPlayerContext}  = useContext(CurrentUserContext)
  const [currentChallenge, setCurrentChallenge] = useState({});
  const [challengeList, setChallengeList] = useState([]);

  useEffect(() => {
    getCurrentPlayerWithToken(userToken)
      .then(function (response:any) {
        setCurrentPlayerContext(response.data)
        setChallengeList(response.data.courses[0].challenges)

      })
      .catch(function (error:any) {
        console.log('eeeeeeeeeeeeeeeeeror', error);
      });      
  }, [currentPlayerContext])

///actions and api calls

 const pressHandler = async () => {
  
//call the back with the id of the challenge and make it completed
  let response = await axios.put( `${ngrok.Ngrok}/api/user/challenge/${actionId}/complete`
      ) 
      .then( (res: any) => { 
        console.log('res compte endpoint :>> ', res.data);
        // setCurrentPlayerContext(res.data.user)
      }) 
      .catch((error:any) => {
        console.log('Response ERROR catch put complete action--- ',error.response)
      })
  ///////////   navigation redirect to new screen  ////////////////
  navigation.navigate("Felicitation", {});
 }

  ///function for render
  const getChallengeTitles = ()=>{
    return challengeList.map((challenge) => {
     if(challenge.isCompleted == false){
      return challenge.title
      }
     } )
   }
   const getNextIncompletedChallenge = ()=>{
     if(challengeList.length > 0){
      return  challengeList.find( (challenge) => { 
            return challenge.isCompleted == false; 
        });
     }
  }
  let data = getNextIncompletedChallenge()

  
 //Ask quentin about the two rendres webview versus mobile

  ////creat a bunch of varibles for the rendre cycle
  let actionId: number = data ? data.id : false
  let challengeTitle: string = data ? data.title : "title";
  let challengeDescription: string = data ? data.title: "descrpt";
  let ChallengePoints : string = data? data.reward.gamePoints : 'gamepoints';
  let challengeCO2 : string = data? data.reward.rewardCo2 : 'reward co2';
  let challengeH2o : string = data? data.reward.rewardH2o : 'reward hto';
  let challengeImage : string = data? data.image : 'image';
    return (
      <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Le défi du jour : </Text>
        <Text style={styles.titleText}> {challengeTitle} </Text>
     
        <View style={styles.container2}>
           {/* <Text style={styles.description}>{challengeTitle } </Text>) */}
        </View>
        <View style={styles.container3}>
          <Text style={styles.points}>points gagnés :</Text>
          <Text style={styles.points}> {ChallengePoints}</Text>
        </View>
        <View style={styles.container3}>   
            <Text style={styles.description}>
                Tonnes de CO2 Compensés maintenant :{" "}
                {challengeCO2}
            </Text>
        </View>
          
            <Image
              style={styles.Image}
         
              source={{uri: challengeImage}}

            ></Image>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => pressHandler()}
              style={styles.button}
            >
              <Text style={styles.buttonText}>J'accepte !</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Dommage",  {
                // propsItem: actionList[id]   
              }  )}
              style={styles.button2}
            >
              <Text style={styles.buttonText}>Je refuse</Text>
            </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
 
    )
}


const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "white",
    // backgroundColor: 'green'
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop:30
  },
  titleText: {
    fontSize: 20,
    fontWeight: "600",
    // color: Colors.slateGray,
    // fontFamily: "montserrat",

    textAlign: "center",
  },
  container2: {
    borderRadius: 3,
    paddingHorizontal: 1,
    paddingBottom: 1,
    marginLeft: 10,
    marginRight: 0, 
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    color: "#8a888c",
  },
  defiText: {
    fontSize: 18,
    fontWeight: "600",
    // color: Colors.moss,
    textAlign: "center",
    borderColor: "black",
    borderWidth: 5,
    borderStyle: "solid",
    textAlign: "center"
  },
  container3: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  Image: {
    width: 200,
    height: 200,
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 30,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: "white",
  },
  defiText: {
    fontSize: 18,
    fontWeight: "600",
    // color: Colors.moss,
    marginTop: 10,
  },
  points: {
    fontSize: 18,
    fontWeight: "600",
    // color: Colors.moss,
    textAlign: "center",
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#a9ba9d",
        // backgroundColor: Colors.greenLaurel,

    padding: 10,
    margin: 5,
    borderRadius: 5,
    margin: 30,
  },
  button2: {
    backgroundColor: "#f46049",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    margin: 30,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
})