import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView} from 'react-native';

const Gerakan = ({navigation}) => {
  var assetsArr=[require('../../assets/WorkOutIMG/PushUp.gif'),
               require('../../assets/WorkOutIMG/PressUpper_Body.gif'),
               require('../../assets/WorkOutIMG/Sit-Up_Variations.gif'),
               require('../../assets/WorkOutIMG/StandingShoulderWithDumbbells.gif'),
               require('../../assets/WorkOutIMG/SculptedArmsUp.gif'),
               require('../../assets/WorkOutIMG/Weightlifting_dumbble.gif'),
               require('../../assets/WorkOutIMG/Weightlifting.gif'),
               require('../../assets/WorkOutIMG/Sit-Up_Variations_stomatch.gif')
                ];
  var gerakanTitle = ['Push Up 12x',
                      'PressUp dumbbell 10x',
                      'Russian Twists 10x',
                      'Hammer press 10x ',
                      'SculptedArmsUp 10x',
                      'Tricep kickback 10x',
                      'Deadlift 5x',
                      'Flutter Kicks 10x'
                    ];
    var barView = [];
                
  for (let i = 0; i < assetsArr.length; i++) {
    var view =
    <View style={styles.barBox}>
      <Image source={assetsArr[i]}  style={{ width: 100, height: 80,margin:10,marginRight:40 }}/>
        <Text style={{padding:30,color:'#FF5151'}}>{gerakanTitle[i]}</Text>
    </View>
    barView.push(view);
    
  }
  return (

   
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/man.jpg')}  style={{ width: 400, height: 150,position:'absolute' }}/>
        <Ionicons name="arrow-back-circle" size={35} color="white" />
      </View>
      <View style={styles.textBox}>
        <Text>Otot Lengan & perut</Text>
      </View>
      <ScrollView style={styles.barContainer}>  
          {barView}
      </ScrollView>
      <Pressable style={styles.startBar} onPress={() => navigation.navigate("Countdown")}>
        <Text>Start</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
 export default Gerakan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header :{
    height:150,
    width : '100%',
    top:20,
    textAlign: 'center',
    backgroundColor : '#FF5151',
    marginBottom:20
  },
  barBox:{
    color:'white',
    height: 100,
    width:'80%',
    display:'flex',
    flexDirection:'row',
    marginTop:20,
    marginLeft:40,
    backgroundColor:'black',
    position: 'relative',
    borderRadius:20,
    justifyContent:'center'
  },
  barContainer:{
    backgroundColor:'#FF5151',
    borderRadius:40,
    width:'100%',
    marginBottom:20
    
  },
  textBox:{
    backgroundColor:'#FF5151',
    margin:20,
    paddingRight:20,
    paddingLeft:20,
    borderRadius:10
  },
  startBar:{
    height:40,
    width:70,
    backgroundColor:'#FF5151',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    fontSize:'40'
  }
});
