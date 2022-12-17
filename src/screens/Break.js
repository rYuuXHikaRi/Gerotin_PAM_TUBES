import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView} from 'react-native';

const Break = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
        <Image source={"https://i.pinimg.com/564x/9b/bc/f9/9bbcf91b8148ce91e09614fa0f18cbe3.jpg"}  style={{ width: 300, height: 300 }}/>

        </View>
        <View style={styles.bottomContainer}>
            <Text style={styles.restText}>Istirahat Dulu Cuy</Text>
            <Pressable style={styles.skipButton}>
                <Text style={styles.skipText}>Skip</Text>
            </Pressable>
        </View>

      <StatusBar style="auto"/>
    </View>
  );
}

export default Break

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    flex: 1,
    backgroundColor: 'black',
    width:"100%"
  },
  topContainer:{
    backgroundColor:'#FF5151',
    height:'50%',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    justifyContent:'center',
    alignItems:'center'
    
  },
  restText:{
    color:'#FF5151',
    fontSize:30,
    textAlign:'center',
    marginTop:10
  },
  bottomContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  skipButton:{
    backgroundColor:'red',
    paddingRight:20,
    paddingLeft:20,
    height:50,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    bottom:-250
    
  },
  skipText:{
    fontSize:25,
    fontWeight:'bold',
    
  }
})