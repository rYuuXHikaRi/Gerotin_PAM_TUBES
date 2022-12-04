import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

export default function Artikel() {
  var barView=[];
  for (let i = 0; i < 8; i++) {
    var view =
    <View style={styles.historybox}>
      <Image source={require('./assets/artikel.jpg')}  style={{ width: 100, height: 100,margin:10,marginRight:40,justifyContent:'center' }}/>
      <View style={styles.textbarcontainer}>
        <Text style={styles.textbar}>Pentingnya Berolahraga Saat Malam Hari</Text>
      </View>
   </View>
    barView.push(view);
    
  }
  return (

   
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={require('./assets/logo2.jpg')}  style={{ width: 400, height: 150,position:'absolute' }}/>
        <Ionicons name="arrow-back-circle" size={35} color="#FF5151" />
        <View style={styles.titleBox}>
          <Text>Artikel</Text>
        </View>
        
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
    height:180,
    width : '100%',
    top:20,
    textAlign: 'center',
    backgroundColor : 'black',
    display:'flex',
    flexDirection:'row'
  },

  historybox:{
    color:["purple","white"],
    height: 150,
    width:'80%',
    display:'flex',
    flexDirection:'row',
    marginTop:20,
    marginLeft:40,
    backgroundColor:'black',
    position: 'relative',
    borderRadius:20,
    alignItems:'center'
  },
  historycontainer:{
    backgroundColor:'#FF5151',
    borderRadius:20,
    width:'100%',
  },
  titleBox:{
    backgroundColor:'#FF5151',
    color:'black',
    fontWeight:'bold',
    height:25,
    margin:20,
    paddingRight:20,
    paddingLeft:20,
    borderRadius:10,
    marginLeft:125
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
