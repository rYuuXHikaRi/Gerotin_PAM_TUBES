import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View ,Image, Button, Pressable} from "react-native";
import React from "react";
import PrevNextIcon from 'react-native-vector-icons/AntDesign';
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { CircularProgress } from 'expo-linear-gradient';
import { useState } from 'react';

const Countdown = ({navigation}) => {
    const [timeLeft, setTimeLeft] = useState(10);
  
    const tick = () => {
      // stop the timer when it reaches 0
      if (timeLeft <= 0) return;
  
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
        tick();
      }, 1000);
    };
  
    // start the timer when the component mounts
    React.useEffect(() => {
      tick();
    }, []);

        return(
          <View style={{backgroundColor:'#404040' ,width:'100%' , height:'100%'}}>
            <SafeAreaView>
              <Image style={StyleS.content} source={require('../../assets/WorkOutIMG/SculptedArms-unscreen.gif')} />
                <Text style={StyleS.teks}>Arm Raises 12X</Text>

                <View style={styles.container}>
                    <ProgressCircle
                      style={styles.progressCircle}
                      progress={timeLeft / 10}
                      color="#FF5151"
                        />
                      <Text style={styles.timerText}>{timeLeft}</Text>
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

  export default  Countdown;

const StyleS = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  progressCircle: {
    margin: 8,
  },
  timerText: {
    fontSize: 24,
    margin: 8,
  },
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
