import { StatusBar } from "expo-status-bar";
import {SafeAreaView,StyleSheet,Text,View,Image,Button,Pressable,} from "react-native";
import React from "react";
import PrevNextIcon from "react-native-vector-icons/AntDesign";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { useRoute } from "@react-navigation/core";

const Countdown = ({ navigation }) => {
  const route = useRoute();
  console.log(route.params);
  return (
    <View style={{ backgroundColor: "#404040", width: "100%", height: "100%" }}>
      <SafeAreaView>
        <Image
          style={StyleS.content}
          source={require("../../assets/WorkOutIMG/SculptedArms-unscreen.gif")}
        />
        <Text style={StyleS.teks}>{}</Text>

        <Pressable style={StyleS.Bprev}>
          <Text style={StyleS.prev}>
            <PrevNextIcon
              style={StyleS.previcon}
              name="arrowleft"
              color={"#fff"}
              size={30}
            />{" "}
            Prev
          </Text>
        </Pressable>
        
        <Pressable style={StyleS.Bnext}>
          <Text style={StyleS.next}>
            Next
            <PrevNextIcon
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
});
