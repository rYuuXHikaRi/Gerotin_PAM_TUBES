import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView} from 'react-native';

export default function App() {
  var barView=[];
  for (let i = 0; i < 8; i++) {
    var view =
    <View style={styles.historybox}>
    <Image source={require('./assets/pushup.gif')}  style={{ width: 100, height: 80,margin:10,marginRight:40 }}/>
     <Text style={{padding:35}}>Push Up 10x</Text>
   </View>
    barView.push(view);
    
  }
  return (

   
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/man.jpg')}  style={{ width: 400, height: 150,position:'absolute' }}/>
        <Ionicons name="arrow-back-circle" size={35} color="white" />
      </View>
      <View style={styles.textbox}>
        <Text>Otot Dada</Text>
      </View>
      <ScrollView style={styles.historycontainer}>  
          {barView}
      </ScrollView>
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
    backgroundColor : 'red',
    marginBottom:20
  },
  historybox:{
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
  historycontainer:{
    backgroundColor:'red',
    borderRadius:20,
    width:'120%',
    
  },
  textbox:{
    backgroundColor:'red',
    margin:20,
    paddingRight:20,
    paddingLeft:20,
    borderRadius:10
  }
});
