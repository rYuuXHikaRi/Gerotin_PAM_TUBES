import { StatusBar } from "expo-status-bar";
import {SafeAreaView,StyleSheet,Text,View,Image,Button,Pressable,} from "react-native";
import React, { useState,useEffect } from "react";
import IconArrow from "react-native-vector-icons/AntDesign";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useRoute } from "@react-navigation/core";

const Countdown = ({ navigation }) => {
  const route = useRoute();
  const index = route.params.index;
  const excersisesData = route.params.excersises;
  const startTimer = route.params.time
  let timer = 0;
  const [timeleft , setTimeLeft] = useState(startTimer)

  const imageCover = route.params.imageCover;
  const excersisesName = route.params.excersisesName;

  const nextExcersises = () => {
    if (index == 6) {
      navigation.navigate("Finish",{
        imageCover: imageCover,
        excersisesName: excersisesName
      })
    } else {
        navigation.navigate("Break", {
        imageCover: imageCover,
        excersisesName: excersisesName,
        excersises: excersisesData,
        image: excersisesData[index + 1].image,
        name: excersisesData[index + 1].name,
        set: excersisesData[index + 1].sets,
        time: excersisesData[index + 1].time,
        index: index + 1,
      })
    }
  }
  const prevExcersisesStyles = () => {
    if (index == 0) {
        return {display: "none",
                backgroundColor: '#6e6d6d'}
    } else if(index >= 0){
        navigation.navigate("Countdown", {
        imageCover: imageCover,
        excersisesName : excersisesName,
        excersises: excersisesData,
        image: excersisesData[index - 1].image,
        name: excersisesData[index - 1].name,
        set: excersisesData[index - 1].sets,
        time: excersisesData[index - 1].time,
        index: index - 1,
    })
  }
}

  return (
    <View style={{ backgroundColor: "#404040", width: "100%", height: "100%" }}>
      <SafeAreaView>
        <Image
          style={StyleS.content}
          source={{uri:route.params.image}}
        />
        <Text style={StyleS.teks}>{route.params.name}</Text>
        <Text style={StyleS.teksSets}>{route.params.set + " X"}</Text>
        <Pressable style={StyleS.Bprev}
          onPress={prevExcersisesStyles}>
          <Text style={StyleS.prev}>
            <IconArrow
              style={StyleS.previcon}
              name="arrowleft"
              color={"#fff"}
              size={30}
            />{" "}
            Prev
          </Text>
        </Pressable>
        
        <Pressable style={StyleS.Bnext} 
          onPress={nextExcersises}>
          <Text style={StyleS.next}>
            Next 
            <IconArrow
              style={StyleS.nexticon}
              name="arrowright"
              color={"#fff"}
              size={30}
            />
          </Text>
        </Pressable>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
};

export default Countdown;

const StyleS = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  progressCircle: {
    margin: 8,
  },
  timerText: {
    fontSize: 24,
    margin: 8,
  },
  content: {
    width: "100%",
    height: 395,
    marginTop: 20,
    backgroundColor: "#FF5151",
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },  
  teks: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffff",
  },
  teksSets: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    marginBottom: 170,
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffff",
  },

  CC: {
    alignContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  prev: {
    fontSize: 30,
    textAlign: "center",
    color: "#ffff",
    paddingBottom: 3,
  },
  Bprev: {
    backgroundColor: "#404040",
    marginLeft: 10,
    marginRight: "auto",
    marginTop: "13%",
    fontSize: 50,
    fontWeight: "bold",
    padding: 2,
    width: 160,
    height: 51,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#B0B0B0",
  },
  next: {
    fontSize: 30,
    color: "#ffff",
    textAlign: "center",
  },
  Bnext: {
    backgroundColor: "#404040",
    marginLeft: "auto",
    marginRight: 10,
    position: "relative",
    top: -51,
    fontSize: 50,
    fontWeight: "bold",
    padding: 2,
    width: 160,
    height: 51,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#B0B0B0",
  },
  TimeText:{
    color:'white',
    fontSize:50,
    textAlign:'center',
    marginTop:10
  }
});
