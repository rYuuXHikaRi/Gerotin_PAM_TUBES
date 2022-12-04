import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView} from 'react-native';

const finish = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={require('./assets/trr.png')}  style={{ width: 300, height: 400,position:'relative',marginTop:100}}/>
      <Text style={styles.text}> Congratulations! </Text>
      <Text style={styles.text1}> You Have Completed The Workout </Text>
      </View>
      <View style={styles.textbox}>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:25, color:'white'}}>Home</Text>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

export default finish

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
