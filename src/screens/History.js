import React,{useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Pressable,Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView} from 'react-native';
import Axios, { all } from 'axios';

// Local components
import SafeViewAndroid from '../../components/SafeViewAndroid';
import { TouchableOpacity } from 'react-native-gesture-handler';


const History = ({navigation,nama,gambar}) => {
  const [historyItem,serHistoryItem]=useState([])

  useEffect(()=>{
    getData();

  },[])

  const getData=()=>{
    Axios.get('http://10.0.2.2:3000/history')
    .then(res=>{
      console.log('res:',res)
      serHistoryItem(res.data)
    })
  }

  const deleteData=()=>{
    for (let i = 1; i <= historyItem.length; i++) {
      const address='http://10.0.2.2:3000/history/'+i.toString()
      Axios.delete(address)
      getData()
    }
      


  }

  var barView=[];
  for (let i = 0; i < 3; i++) {
    var view =
    <View style={styles.historybox}>
      <Image source={require('../../assets/dada.jpg')}  style={{ width: 100, height: 80,margin:10,marginRight:40 }}/>
      <View style={styles.textbarcontainer}>
        <Text style={styles.textbar}>Otot Dada</Text>
        <Text style={styles.textbar}>17 September 2022</Text>
      </View>
   </View>
    barView.push(view);
    
  }
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
      
        <View style={styles.header}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Ionicons name="arrow-back-circle" size={35} color="#FF5151" style={{position:'relative'}} />
          </Pressable>
          <View style={styles.titleBox}>
            <Text style={styles.title}>Riwayat Latihan</Text>
          </View> 
        </View>

        <View style={styles.historycontainer}>
          <ScrollView>
          <TouchableOpacity onPress={deleteData}
                      style={{
                        backgroundColor:"black",
                        color:"white",
                        height:30,
                        width:130,
                        borderRadius:10,
                        display:'flex',
                        justifyContent:"center",
                      }}>
            <Text style={{color:"white" ,fontWeight:"bold",textAlign:"center"}}>Clear History</Text>
          </TouchableOpacity>
            {historyItem.map(item=>{

              return<View style={styles.historybox}>
              <Image source={{uri:item.image}}  style={{ width: 100, height: 80,margin:10,marginRight:40 }}/>
              <View style={styles.textbarcontainer}>
                <Text style={styles.textbar}>{item.name}</Text>
                <Text style={styles.textbar}>{item.time}</Text>
              </View>
          </View>
            })}

           
          </ScrollView> 
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404040',
  },
  header :{
    height:'15%',
    textAlign: 'center',
    marginBottom:50,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    padding:20
    

  },
  titleBox:{
    height:25,
    paddingRight:20,
    paddingLeft:20,
    borderRadius:10,
    marginLeft:70,
    justifyContent:'center'
  },
  title:{
    color:'#FF5151',
    fontSize:15,
    fontWeight:'bold'
  },
  historybox:{
    height: 105,
    width:'100%',
    display:'flex',
    flexDirection:'row',
    marginTop:20,
    backgroundColor:'black',
    position: 'relative',
    borderRadius: 25,
    justifyContent:'center',
  },
  historycontainer:{
    backgroundColor:'#FF5151',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    width:390,
    height:"100%",
    paddingTop: 51,
    paddingLeft: 24,
    paddingRight: 24,
  
  },

  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
  textbar:{
    color:'white',
  },
  textbarcontainer:{
    justifyContent:'center',
    textAlign:'center'
  },


});
