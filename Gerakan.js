import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView} from 'react-native';

export default function Gerakan() {
  var barView=[];
  for (let i = 0; i < 8; i++) {
    var view =
    <View style={styles.barBox}>
    <Image source={require('./assets/pushup.gif')}  style={{ width: 100, height: 80,margin:10,marginRight:40 }}/>
     <Text style={{padding:30,color:'white'}}>Push Up 10x</Text>
   </View>
    barView.push(view);
    
  }
  return (

   
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/man.jpg')}  style={{ width: 400, height: 150,position:'absolute' }}/>
        <Ionicons name="arrow-back-circle" size={35} color="white" />
      </View>
      <View style={styles.textBox}>
        <Text>Otot Dada</Text>
      </View>
      <ScrollView style={styles.barContainer}>  
          {barView}
      </ScrollView>
      <View style={styles.startBar}>
        <Text>Start</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


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
