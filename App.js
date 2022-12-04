import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View ,Image, Button, Pressable} from "react-native";
import React from "react";
import PrevNextIcon from 'react-native-vector-icons/AntDesign';
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default function App(){
  const renderTime = ({ remainingTime }) => {
      return <View><Teks>{RT}</Teks></View>;
    }
  const RT = () => {
    const name = 'runningtime';
    return(
      <View>
        <View><Text>Remaining</Text></View>
        <View><Text>value {remainingTime}</Text></View>
        <View><Text>seconds</Text></View>
      </View>
    );
  };
  return(
    <View style={{backgroundColor:'#404040' ,width:'100%' , height:'100%'}}>
      <SafeAreaView>
        <Image style={StyleS.content} source={require('./WorkOutIMG/SculptedArms-unscreen.gif')} />
          <Text style={StyleS.teks}>Arm Raises 12X</Text>

          <View style={StyleS.CC}>
            <CountdownCircleTimer
                 isPlaying
                 duration={20}
                 colors={'#FF5151'}
                 onComplete={() => [true, 1000]}>
            </CountdownCircleTimer>
            {renderTime}
          </View>
            <Pressable style={StyleS.Bprev}>
              <Text style={StyleS.prev}>
                <PrevNextIcon style={StyleS.previcon} name='arrowleft'color={'#fff'} size={30}/>   Prev
              </Text>
            </Pressable>
            <Pressable style={StyleS.Bnext}>
              <Text style={StyleS.next}>Next  
                <PrevNextIcon style={StyleS.nexticon} name='arrowright'color={'#fff'} size={30}/>
              </Text>
            </Pressable>
      </SafeAreaView>
      <StatusBar style="auto"/>
    </View>
  );
}

const StyleS = StyleSheet.create({
  content:{
    width: '100%',
    height: 395 ,
    marginTop:20,
    backgroundColor:'#FF5151',
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
  teks:{
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:30,
    fontSize:30,
    fontWeight:'bold',
    color:'#ffff'
  },
  CC:{
    alignContent:'center',
    alignItems:'center',
    marginTop:50
  },
  prev:{
    fontSize:30,
    textAlign:'center',
    color:'#ffff',
    paddingBottom:3,
  },
  Bprev:{
    backgroundColor:'#404040',
    marginLeft:10,
    marginRight:'auto',
    marginTop:'13%',
    fontSize:50,
    fontWeight:'bold',
    padding:2,
    width:160,
    height:51,
    borderRadius:20,
    borderWidth:1,
    borderColor:'#B0B0B0'
  },
  next:{
    fontSize:30,
    color:'#ffff',
    textAlign:'center',
  },
  Bnext:{
    backgroundColor:'#404040',
    marginLeft:'auto',
    marginRight:10,
    position:'relative',
    top:-51,
    fontSize:50,
    fontWeight:'bold',
    padding:2,
    width:160,
    height:51,
    borderRadius:20,
    borderWidth:1,
    borderColor:'#B0B0B0'
  },
})

