import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Pressable, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView} from 'react-native';

// Local components
import SafeViewAndroid from '../../components/SafeViewAndroid';

const Article = ({navigation}) => {
  var barView=[];
  for (let i = 0; i < 8; i++) {
    var view =
    <View style={styles.historybox}>
      <Image source={require('../../assets/artikel.jpg')}  style={{ width: 100, height: 100,margin:10,marginRight:40,justifyContent:'center' }}/>
      <View style={styles.textbarcontainer}>
        <Text style={styles.textbar}>Pentingnya Berolahraga Saat Malam Hari</Text>
      </View>
   </View>
    barView.push(view);
    
  }
  return (

    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/logo2.jpg') } resizeMode="cover" style={{width: '100%', height: '100%',}}>
          <View style={styles.header}>
              <View>
                <Pressable onPress={() => navigation.navigate("Home")}>
                  <Ionicons name="arrow-back-circle" size={40} color="#FF5151" />
                </Pressable>
              </View>
              <Text style={styles.textTitle}>Artikel</Text>
          </View>
        
        
      { /*
        <View style={styles.coverContainer}>
          <Text>test</Text>
          <Image source={require('../../assets/logo2.jpg')}  style={styles.imgCover}/>
  </View> */ }
        
          <View style={styles.historycontainer}>
            <ScrollView>
              {barView}
            </ScrollView>  
          </View>
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
export default Article;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#404040",
  },
  header :{
    backgroundColor: "black",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",

    width: '100%',
    height: 86,
    paddingTop: 24,
    paddingLeft: 24,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  textTitle: {
    color: "#FF5151",
    marginTop: 12,
    marginLeft: 113,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  coverContainer : {
    backgroundColor: "white",
    marginTop: -5,
  },
  imgCover: {
    
    width: '100%',
    height: 240,

  },
  historybox:{
    height: 135,
    display:'flex',
    flexDirection:'row',
    marginTop:20,
    backgroundColor:'black',
    position: 'relative',
    borderRadius: 25,
    alignItems:'center'
  },
  historycontainer:{
    backgroundColor:'#FF5151',
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    width:'100%',

    marginTop: 156,
    paddingTop: 55,
    paddingLeft: 24,
    paddingRight: 24,
  },

  textbar:{
    color:'white',
    
  },
  textbarcontainer:{
    justifyContent:'center',
    alignItems:'center',
    width:'40%'
  }

});
