import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView} from 'react-native';
import {useRoute} from "@react-navigation/core";
import { Axios } from "axios";
const Finish = ({navigation,route}) => {
  const imageCover = route.params.imageCover;
  const excersisesName = route.params.excersisesName;
  var date = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();
  var hours = new Date().getHours();
  var min = new Date().getMinutes();
  var time = date +'-'+month+'-'+year+' '+hours+':'+min
  const submit =()=>{
    const data={
      name:imageCover,
      image:excersisesName,
      time:time
    }
    console.log(data)
    Axios.post('http://10.0.2.2:3000/history',data)
    .then(res=>{
      console.log('res:',res)
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={require('../../assets/trr.png')}  style={{ width: 300, height: 400,position:'relative',marginTop:100}}/>
      <Text style={styles.text}> Congratulations! </Text>
      <Text style={styles.text1}> You Have Completed The Workout </Text>
      </View>
      <Pressable style={styles.textbox} onPress={() => {navigation.navigate("Home")}}>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:25, color:'white'}}>Home</Text>
      </Pressable>
      <StatusBar style="auto"/>
    </View>
  );
}

export default Finish;

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
    backgroundColor: 'black',
    width:"100%"
  },
  header :{
    width:"100%",
    alignItems:'center'
  },
  text:{
    color:"#FF5151",
    fontSize:35,
    fontWeight:'bold',
    marginTop:0
  },
  text1:{
    color:"white", 
    fontSize:20,
  },
  container2:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    marginTop:40,
  },
  textbox:{
    backgroundColor:'#FF5151',
    marginTop:80,
    marginRight:20,
    marginLeft:20,
    borderRadius:20,
    height:40
  }
})
