
            
import React from 'react';
import { StyleSheet,Text, View, TouchableHighlight, Image,Alert, ScrollView,} from 'react-native';


export default function FelicitationScreen({ navigation, route }) {
  // const { propsItem } = route.params;
  // const { newScore } = route.params;
  // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    newScore :>> ', newScore);
  // const defiTitle = propsItem.title;
  // const defiDescript = propsItem.description;
  // const defipoint = propsItem.points;
  // const defiCO2 = propsItem.co2;
 //  (typeof defiCO2 !== 'undefined') ? defiCO2 : 2018;
 //  const defiImg = allImages[data.actions[id].photo]
 const congrats ="https://images.unsplash.com/photo-1545315003-c5ad6226c272?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uZ3JhdHVsYXRpb25zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
 const tigre= "https://images.unsplash.com/photo-1584112167303-105b1a50fce3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHRpZ2VyfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
     return (
       <ScrollView style={styles.scrollContainer}>
         <View style={styles.container}>
         <View style={styles.header}>         
          <Text style={styles.contentSectionText}> Titre</Text>       
         </View>   
         <Image 
        style={styles.photo} 
        source={{uri : congrats }}
       //  source={require('../assets/images/tigre_heureux.jpg')}
        />
           <Text style={styles.sloganName}>Felicitation !!!</Text>
         
           <View style={styles.descriptionContent}>
          
             <Text style={styles.description}>
               you saved :  tones of carbon !!
             </Text>
             <Text style={styles.description}>
               you earned :  game points.  
             </Text>
               
           </View>
           <View style={styles.separator}/>
        <View style={styles.footer}>
          <View style={styles.contentContainer}>   
             <View style={styles.contentBox}>         
               {/* <Text style={styles.contentSectionText}>{defiDescript}</Text>        */}
             </View>     
             {/* <Text style={styles.slogan}> new score : {newScore}. Rendez-vous demain!</Text>  */}
           </View>
         </View> 
           <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => navigation.goBack()}>
             <Text style={styles.buttonText}>Go  back</Text>
           </TouchableHighlight>
         </View>
       </ScrollView>
     );
   
 }
 
 const styles = StyleSheet.create({
   scrollContainer:{
     flex: 1,
     backgroundColor: '#a4dbca',

   },
   container: {
     flex: 1,
     alignItems: 'center',
   },
   header :{
    paddingTop: 60
   },

   photo: {
     width:200,
     height:200,
     justifyContent: 'center',
     marginBottom:10,
     marginTop:30,
     borderRadius: 5,
     borderWidth: 4,
     borderColor: "white",
   },
   sloganName: {
     fontSize:32,
     fontWeight: '600',
     color: '#FFFFFF',
   },
   slogan:{
     fontSize:18,
     fontWeight: '600',
     color: '#228B22',
     marginTop:10,
   },
   descriptionContent:{
     padding:30
   },
   description:{
     fontSize:18,
     textAlign:'center',
     marginTop:10,
     color: '#FFFFFF',
   },
   buttonContainer: {
     height:45,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     marginBottom:20,
     width:100,
     borderRadius:30,
   },
   sendButton: {
     backgroundColor: "#FFFFFF",
   },
   buttonText: {
     color: '#EE82EE',
   },
   separator: {
     marginTop: 10,
     borderColor: 'gray',
     borderWidth: 1,
     borderStyle: 'solid',
   },
   footer:{
     flexDirection: 'row',
     paddingTop: 12.5,
     paddingBottom: 25,
     paddingHorizontal: 16,
     borderBottomLeftRadius: 1,
     borderBottomRightRadius: 1,
 
   },
   contentContainer: {
     flex: 1,
     paddingTop: 12.5,
     paddingBottom: 25,
     borderColor: '#FFF',
     borderWidth: 3,
     borderStyle: 'solid',
     borderRadius: 5,
   }, 
   contentBox: {
     justifyContent: 'space-evenly', 
     paddingTop: 15,
     paddingBottom: 5,
     // alignSelf: 'center',
     flex: 1,
   },
   contentSectionText: {
     color: "#FFF",
     fontSize:18,
     justifyContent: 'center',
 
   },
 }); 