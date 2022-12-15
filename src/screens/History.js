import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView} from 'react-native';

// Local components
import SafeViewAndroid from '../../components/SafeViewAndroid';

const History = ({navigation}) => {
  var barView=[];
  for (let i = 0; i < 1; i++) {
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
            {barView}
          </ScrollView> 
        </View>
        <Pressable onPress={() => navigation.navigate("Riwayat")}>
            <Icon2 name='history' size={32} style={{color: "#FF5151", marginLeft: 2}}/>
            <Text style={styles.navigatorText}> Tambah Riwayat</Text>
        </Pressable>
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
