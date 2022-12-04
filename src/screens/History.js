import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

export default function History() {
  var barView=[];
  for (let i = 0; i < 8; i++) {
    var view =
    <View style={styles.historybox}>
      <Image source={require('./assets/dada.jpg')}  style={{ width: 100, height: 80,margin:10,marginRight:40 }}/>
      <View style={styles.textbarcontainer}>
        <Text style={styles.textbar}>Otot Dada</Text>
        <Text style={styles.textbar}>17 September 2022</Text>
      </View>
   </View>
    barView.push(view);
    
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
      <Ionicons name="arrow-back-circle" size={35} color="#FF5151" style={{position:'relative'}} />
        <View style={styles.titleBox}>
          <Text style={styles.title}>Riwayat Latihan</Text>
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
  },
  header :{
    height:'15%',
    top:20,
    textAlign: 'center',
    backgroundColor : 'black',
    marginBottom:50,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    padding:20
    

  },
  historybox:{
    height: 100,
    width:'80%',
    display:'flex',
    flexDirection:'row',
    marginTop:20,
    backgroundColor:'black',
    position: 'relative',
    borderRadius:20,
    justifyContent:'center',
    marginLeft:40,
    marginRight:40
  },
  historycontainer:{
    backgroundColor:'#FF5151',
    borderRadius:20,
    width:390,
  
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
    marginLeft:70,
    justifyContent:'center'
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
  title:{
    fontSize:15,
    fontWeight:'bold'
  }

});
