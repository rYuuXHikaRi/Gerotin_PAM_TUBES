import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View, SafeAreaView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import SafeViewAndroid from '../../components/SafeViewAndroid';

const Preferensi = () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <View style={styles.title}>
            <Icon name="arrow-back-circle" size={40} style={{color: "#FF5151", marginLeft: 24, marginTop: 24,}}/>
            <Text style={styles.textTitle}>Preferensi</Text>
        </View>
        <View style={styles.contentBox}>
            <Text style={styles.contentText}>Hidupkan Pengingat</Text>
            <Text style={styles.contentText}>Setel Pengingat</Text>
            <Pressable style={styles.contentButtonOK}>
                <Text style={styles.buttonText}>OK</Text>
            </Pressable>
            <Pressable style={styles.contentButtonNotOK}>
                <Text style={styles.buttonText}>Batal</Text>
            </Pressable>
        </View>
        <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default Preferensi

const styles = StyleSheet.create({
    title: {
        flex: 1,
    },
    textTitle: {
        color: "#FF5151",
        marginTop: -31,

        fontSize: 16,
        fontWeight: "700",
        textAlign: "center",
    },
    contentBox: {
        backgroundColor: "#FF5151",
        width: 390,
        height: 700,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,

        paddingTop: 79,
        paddingLeft: 24,
    },
    contentText: {
        color: "#404040",
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 29,
        textTransform: "capitalize",

        marginBottom: 22,
    },
    contentButtonOK : {
        width: 73,
        height: 45,
        backgroundColor: "#FF5151",
        borderWidth: 1,
        borderRadius: 13,
        borderColor: "#BDBBBB",
        
        marginTop: 63,
        paddingTop: 8,
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontSize: 24,
        fontStyle: "Bold"
    },
    contentButtonNotOK: {
        width: 73,
        height: 45,
        backgroundColor: "#404040",
        borderWidth: 1,
        borderRadius: 13,
        borderColor: "#BDBBBB",
        
        marginTop: -46,
        marginLeft: 100,
        paddingTop: 8,
    }
})