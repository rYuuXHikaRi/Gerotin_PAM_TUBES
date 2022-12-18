import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, Pressable, View, SafeAreaView } from 'react-native';
import { Switch} from 'react-native-paper' ;
import Icon from 'react-native-vector-icons/Ionicons';
import TimePicker from '../components/TimePicker';
import ListReminder from '../components/ListReminder';
import SafeViewAndroid from '../../components/SafeViewAndroid';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Provider } from 'react-redux';
import configureStore from '../../store';

const Preferensi = ({navigation}) => {
    const store=configureStore()
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <Pressable style={styles.title} onPress={() => navigation.navigate("Home")}>
            <Icon name="arrow-back-circle" size={40} style={{color: "#FF5151", marginLeft: 24, marginTop: 24,}}/>
            <Text style={styles.textTitle}>Preferensi</Text>
        </Pressable>
        
        <View style={styles.contentBox}>
            <Provider store={store}>
                <ListReminder/>
                <TimePicker/>
            </Provider>
            
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
        paddingRight: 20,
    },
    contentText: {
        color: "#404040",
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 39,
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
    },
    toggleButton: {
        marginTop: -63,
    },
    time:{
        color:'black',
        fontSize:30,
        fontWeight:'bold'
    },
    wrapper:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    removeButton:{
        height:50,
        backgroundColor:'black',
        borderRadius:10,
        padding:10,
        alignContent:'center'
    },
    addButton:{
        height:50,
        backgroundColor:'black',
        borderRadius:10,
        padding:10,
        alignContent:'center'
    }
})