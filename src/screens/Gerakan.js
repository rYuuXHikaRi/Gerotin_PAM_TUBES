import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

const Gerakan = ({ navigation }) => {
  const route = useRoute();
  const excersisesData = route.params.excersises;
  const imageCover = route.params.image;
  const excersisesName = route.params.name;
  const displayName = route.params.displayName;
  const email = route.params.email;
  const photoURL = route.params.photoURL;


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: imageCover }}
          style={{ width: 400, height: 165, position: "absolute" }}
        />
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back-circle"
          size={35}
          color="#FF5151"
        />
      </View>
      <View style={styles.textBox}>
        <Text>{excersisesName}</Text>
      </View>
      <View style={styles.barContainer}>
        <ScrollView>
          {excersisesData.map((item, key) => {
            return (
              <View style={styles.exercisesImg} key={item.id}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.exercisesImgContent}
                />
                <View style={{ marginLeft: 28 }}>
                  <Text style={styles.exercisesImgText}>{item.name}</Text>
                  <Text style={styles.exercisesImgText}>
                    {item.sets + " X"}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
        <Pressable 
          style={styles.startBar}
          onPress={() => navigation.navigate("Countdown", {
            displayName: displayName,
            email: email,
            photoURL: photoURL,
            imageCover: imageCover,
            excersisesName: excersisesName,
            excersises: excersisesData,
            image:excersisesData[0].image, 
            name: excersisesData[0].name,
            set: excersisesData[0].sets,
            time: excersisesData[0].time,
            index: 0,
          })}
        >
          <Text>Start</Text>
        </Pressable>
      <StatusBar style="auto" />
    </View>
  );
};
export default Gerakan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: 150,
    width: "100%",
    top: 20,
    textAlign: "center",
    backgroundColor: "#FF5151",
    marginBottom: 20,
  },
  barBox: {
    color: "white",
    height: 100,
    width: "80%",
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 40,
    backgroundColor: "black",
    position: "relative",
    borderRadius: 20,
    justifyContent: "center",
  },
  barContainer: {
    paddingTop: 43,
    paddingLeft: 25,
    paddingBottom: 30,
    backgroundColor: "#FF5151",
    borderRadius: 40,
    width: "100%",
    height: "65%",
    marginBottom: 20,
  },
  exercisesImg: {
    width: "95%",
    height: 100,
    backgroundColor: "#404040",
    marginBottom: 25,
    paddingTop: 14,
    paddingLeft: 20,
    borderRadius: 25,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  exercisesImgContent: {
    width: 93,
    height: 70,
    borderRadius: 12,
  },
  exercisesImgText: {
    color: "#FF5151",
    fontSize: 19,
    fontWeight: "700",
  },
  textBox: {
    backgroundColor: "#FF5151",
    margin: 20,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10,
  },
  startBar: {
    height: 40,
    width: 70,
    backgroundColor: "#FF5151",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    fontSize: "40",
  },
});
