import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Icon1 from 'react-native-vector-icons/Ionicons';
import { SafeAreaView, ScrollView} from 'react-native';

const ArticleContent = ({route,navigation}) => {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri:route.params.data.urlToImage}}  style={{ width: "100%", height: "110%",position:'relative' }}/>
        <Icon1 name="arrow-back-circle" size={35} color="#FF5151" style={{position:'absolute'}}/>
      </View>
      <ScrollView style={styles.historycontainer}>  

        <Text style={styles.titleText}>{route.params.data.title}</Text>
        <Text style={styles.isi}> {route.params.data.description}
        </Text>
      </ScrollView>
      <StatusBar style="auto"/>
    </View>
  );
}

export default ArticleContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    width:"100%",
    marginTop:20
  },
  header :{
    height:"50%",
    width:"100%",
    marginTop:2,
    textAlign:'left'
  },
  historycontainer:{
    backgroundColor:'#FF5151',
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    width:'100%',
    textAlign:'center',
  },
  isi:{
    color:'white',
    margin:25,
    textAlign:'justify'
  },
  title:{
    marginLeft:'8%',
    marginBottom:'2%',
    width:'80%',
    position:'absolute',
    bottom:0
  },
  titleText:{
    color:'white',
    fontSize:22,
    fontWeight:'bold',
    textAlign:'left',
    margin:30
  }
})