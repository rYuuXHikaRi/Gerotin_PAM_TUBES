import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/core";

const Break = ({ navigation}) => {
  let timer = 0;
  const route = useRoute();
  const startTimer = route.params.time
  const index = route.params.index;
  const excersisesData = route.params.excersises;
  const [timeleft, setTimeLeft] = useState(startTimer);

  const imageCover = route.params.imageCover;
  const excersisesName = route.params.excersisesName;
  const displayName = route.params.displayName;
  const email = route.params.email;
  const photoURL = route.params.photoURL;

  const StartTime = () => {
    setTimeout(() => {
      if (timeleft <= 0) {
        navigation.navigate("Countdown", {
          displayName: displayName,
          email: email,
          photoURL: photoURL,
          imageCover: imageCover,
          excersisesName: excersisesName,
          excersises: excersisesData,
          image: excersisesData[index].image,
          name: excersisesData[index].name,
          set: excersisesData[index].sets,
          time: excersisesData[index].time,
          index: index,
        });
        clearTimeout(timer);
      }
      setTimeLeft(timeleft - 1);
    }, 1000);
  };
  useEffect(() => {
    StartTime();
    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/9b/bc/f9/9bbcf91b8148ce91e09614fa0f18cbe3.jpg",
          }}
          style={{ width: 300, height: 300 }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.restText}>Istirahat Dulu Cuy!</Text>
        <Text style={styles.TimeText}>{timeleft}</Text>
        <Text style={styles.SecondText}>Second</Text>
        <Pressable
          style={styles.skipButton}
          onPress={() =>
            navigation.navigate("Countdown", {
              displayName: displayName,
              email: email,
              photoURL: photoURL,
              imageCover: imageCover,
              excersisesName: excersisesName,
              excersises: excersisesData,
              image: excersisesData[index].image,
              name: excersisesData[index].name,
              set: excersisesData[index].sets,
              time: excersisesData[index].time,
              index: index,
            })
          }
        >
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default Break;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "black",
    width: "100%",
  },
  topContainer: {
    backgroundColor: "#f1f0ec",
    height: "50%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  restText: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginTop: 35,
  },
  SecondText: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
  },
  TimeText: {
    color: "white",
    fontSize: 50,
    textAlign: "center",
    marginTop: 10,
  },
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  skipButton: {
    backgroundColor: "white",
    paddingRight: 20,
    paddingLeft: 20,
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    bottom: -150,
  },
  skipText: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
