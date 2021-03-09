import React, { useState, useContext, useEffect } from 'react'
import AsyncStorage  from '@react-native-async-storage/async-storage';

import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'
import { ScreenContext } from '../../contexts/ScreenContext';
import { CurrentUserContext, TokenContext } from '../../contexts/CurrentUserContext';
import getCurrentPlayerWithToken from '../../services/currentUserService';

export default function ChallengeListScreen() {
  const screenContext = useContext(ScreenContext)
  const {userToken, setUserToken } = useContext(TokenContext)

  const {currentPlayerContext, setCurrentPlayerContext}  = useContext(CurrentUserContext)
  const [actionList, setActionList] = useState([]);


  useEffect(() => {
    getCurrentPlayerWithToken(userToken)
      .then(function (response:any) {
        setCurrentPlayerContext(response.data)
        setActionList(response.data.courses[0].challenges)  

      })
      .catch(function (error:any) {
        console.log('eeeeeeeeeeeeeeeeeror', error);
      });  
  }, [])
//  const actionTitle : String = actionList ? actionList[0].title : 'title'
//  const actionImg : String = actionList ? actionList[0].image : 'image'
//  const actionDescrpt : String = actionList ? actionList[0].description : 'description'

    return (
      
        <TouchableOpacity>
        <View style={styles.card}>
         
          <View style={styles.cardContent}>
            <View>
              
            {actionList && actionList.length > 0 ? 
            ( <Text style={styles.defiText}>{actionList[0].title}</Text>) 
            : 
            ( <Text style={styles.defiText}>{"defiTitle"}</Text>  )}
              
              {actionList && actionList > 0 ? (<Text style={styles.title}>{ actionList[0].description}</Text>) :
              (<Text style={styles.defiText}>{"defiTitle"}</Text> )}
              {/* <Text style={styles.time}>{actionDescrpt}</Text> */}
            </View>
            {/* <Image style={styles.cardImage} source={{ uri : actionImg }}/>  */}

            <View style={styles.cardFooter}>
              <View style={styles.socialBarContainer}>
                <View style={styles.socialBarSection}>
                  <TouchableOpacity style={styles.socialBarButton}>
                    <Image style={styles.icon} source={{uri: '<img src="https://img.icons8.com/windows/32/000000/co2.png"/>'}}/>
                    <Text style={styles.socialBarLabel}>78</Text>
                  </TouchableOpacity>
                </View>
    
                <View style={styles.socialBarSection}>
                  <TouchableOpacity style={styles.socialBarButton}>
                    <Image style={styles.icon} source={{uri: "https://img.icons8.com/windows/32/000000/co2.png"}}/>
                    <Text style={styles.socialBarLabel}>25</Text>
                  </TouchableOpacity>
                </View>
              
                <View style={styles.socialBarSection}>
                  <TouchableOpacity style={styles.socialBarButton}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/material/50/ffffff/retweet.png'}}/>
                    <Text  style={styles.socialBarLabel}>13</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:10,

  },
  list: {
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 1,
  },
  /******** card **************/
  card:{
    margin: 0,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    backgroundColor: "#DCDCDC",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    //overlay efect
    flex: 1,
    height: 200,
    width: null,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: 'transparent'
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 0,
    paddingVertical: 7.5,
    paddingHorizontal: 0
  },
  cardImage:{
    flex: 1,
    height: 250,
    opacity: 0.5,
  },
  /******** card components **************/
  title:{
    fontSize:22,
    color: "#ffffff",
    marginTop: 10,
    fontWeight:'bold'
  },
  time:{
    fontSize:13,
    color: "#ffffff",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    color: "#ffffff",
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }  
})