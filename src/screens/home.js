import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/FontAwesome";

// Local components
import SafeViewAndroid from "../../components/SafeViewAndroid";
import Preferensi from "./Preferensi";
import ScrollViewHorizontal from "../../components/ScrollViewHorizontal";
import ScrollViewHorizontal2 from "../../components/ScrollViewHorizontal2";
import WorkOut from "../data/WorkOut";

const Home = ({ navigation }) => {
  const WorkOutData = WorkOut;

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Image
              source={require("../../assets/profile.jpg")}
              style={{
                width: 40,
                height: 40,
                borderRadius: 40 / 2,
                borderWidth: 2,
                borderColor: "#FF5151",
              }}
            />
          </Pressable>

          <View>
            <Text style={styles.textHeader}>GEROtin</Text>
          </View>
        </View>

        <View style={styles.greetingWord}>
          <Text
            style={{
              color: "#FF5151",
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Selamat Datang, Tabibito{" "}
          </Text>

          <Text
            style={{
              color: "#FF5151",
              fontSize: 10,
              fontWeight: "300",
            }}
          >
            Selamat Berlatih, Salam Sehat
          </Text>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignContent: "center",
            }}
          >
            <Icon
              name="analytics-outline"
              size={20}
              style={{ color: "#FF5151" }}
            />
            <Text
              style={{
                color: "#FF5151",
                fontSize: 15,
                fontWeight: "800",
                marginLeft: 10,
              }}
            >
              Jumlah Workout
            </Text>
          </View>
        </View>

        <View style={styles.countingStats}>
          <View>
            <Text style={styles.numberStats}>70</Text>
            <Text style={styles.titleStats}>Hari</Text>
          </View>

          <View>
            <Text style={styles.numberStats}>70</Text>
            <Text style={styles.titleStats}>Hari</Text>
          </View>

          <View>
            <Text style={styles.numberStats}>70</Text>
            <Text style={styles.titleStats}>Hari</Text>
          </View>
        </View>

        <View style={styles.contentBox}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Text style={styles.contentText}>Latihan Terakhir</Text>
              <Image
                source={require("../../assets/Home/latestExercise.jpg")}
                style={{
                  width: 87,
                  height: 80,
                  borderRadius: 15,

                  marginTop: 5,
                }}
              />
            </View>

            <View style={{ width: 250, height: 100, marginLeft: 24 }}>
              <Text style={styles.contentText}>
                Artikel Yang Cocok Untuk Kamu
              </Text>
              <ScrollView horizontal={true} style={{ marginLeft: -11 }}>
                <ScrollViewHorizontal
                  action={() => navigation.navigate("KontenArtikel")}
                  imageUri={require("../../assets/Home/latestExercise.jpg")}
                />
                <ScrollViewHorizontal
                  action={() => navigation.navigate("KontenArtikel")}
                  imageUri={require("../../assets/Home/latestExercise.jpg")}
                />
                <ScrollViewHorizontal
                  action={() => navigation.navigate("KontenArtikel")}
                  imageUri={require("../../assets/Home/latestExercise.jpg")}
                />
              </ScrollView>
            </View>
          </View>

          <View style={{ marginTop: 40 }}>
            <Text style={styles.contentText}>Daftar Menu Latihan</Text>
            <View style={{ width: 380, height: 222, marginLeft: -18 }}>
              <ScrollView horizontal={true}>
                {WorkOutData.map((item, key) => {
                  return (
                    <ScrollViewHorizontal2
                      key={key}
                      action={() =>
                        navigation.navigate("Gerakan", {
                          image: item.image,
                          excersises: item.excersises,
                          id: item.id,
                          name: item.name,
                        })
                      }
                      imageUri={{ uri: item.image }}
                    />
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </View>

        <View style={styles.navigatorBox}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            <Pressable onPress={() => navigation.navigate("Riwayat")}>
              <Icon2
                name="history"
                size={32}
                style={{ color: "#FF5151", marginLeft: 2 }}
              />
              <Text style={styles.navigatorText}>Riwayat</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Artikel")}>
              <Icon2
                name="article"
                size={32}
                style={{ color: "#FF5151", marginLeft: 1 }}
              />
              <Text style={styles.navigatorText}>Artikel</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Preferensi")}>
              <Icon3
                name="gears"
                size={32}
                style={{ color: "#FF5151", marginLeft: 6 }}
              />
              <Text style={styles.navigatorText}>Preferensi</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#404040",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: 28,
    marginLeft: 20,
    marginRight: 170,
  },
  textHeader: {
    color: "#FF5151",
    fontSize: 16,
    fontWeight: "700",
  },
  greetingWord: {
    marginTop: 29,
    marginLeft: 20,
  },
  countingStats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: 12,
    marginLeft: 50,
    marginRight: 41,
  },
  numberStats: {
    color: "#FF5151",
    fontSize: 32,
    fontWeight: "800",
  },
  titleStats: {
    color: "#FF5151",
    fontSize: 12,
    fontWeight: "600",

    marginLeft: 6,
  },
  contentBox: {
    backgroundColor: "#FF5151",
    width: "auto",
    height: 590,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,

    marginTop: 38,
    paddingTop: 65,
    paddingLeft: 15,
    paddingRight: 19,
    paddingBottom: 100,
  },
  contentText: {
    color: "#404040",
    fontSize: 13,
    fontWeight: "700",
  },
  navigatorBox: {
    backgroundColor: "#404040",
    width: "auto",
    height: 68,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    marginTop: -106,
    paddingTop: 13,
    paddingLeft: 37,
    paddingBottom: 11,
    paddingRight: 37,
  },
  navigatorText: {
    color: "#FF5151",
    fontWeight: "700",
  },
});
