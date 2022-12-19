import React,{useState,Component} from 'react';
import {Text,View,Image,TextInput, Alert,StyleSheet,Pressable,Button} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {connect} from 'react-redux';
import {addAlarm} from '../../actions/alarm'
 


const TimePicker=(props)=>{
    const[value,setValue]=useState("00:00")
    const [isDateTimePickerVisible,setIsDateTimePickerVisible]=useState(false)
    const makeid = () => {
        var length = 5;
        var result = '';
        var characters = '0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      };
    const showDateTimePicker = () => {
        setIsDateTimePickerVisible(true);
      };
    
    const hideDateTimePicker = () => {
        setIsDateTimePickerVisible(false);
      };
    
    const handleDatePicker = (time) =>{
        
        const alarmNotifData = {
          id: makeid(), // Required
          title: 'Alarm Ringing', // Required
          message: 'My Notification Message', // Required
          channel: 'alarm-channel', // Required. Same id as specified in MainApplication's onCreate method
          ticker: 'My Notification Ticker',
          auto_cancel: true, // default: true
          vibrate: true,
          vibration: 100, // default: 100, no vibration if vibrate: false
          small_icon: 'ic_launcher', // Required
          large_icon: 'ic_launcher',
          play_sound: true,
          sound_name: null, // Plays custom notification ringtone if sound_name: null
          color: 'red',
          schedule_once: true, // Works with ReactNativeAN.scheduleAlarm so alarm fires once
          tag: 'some_tag',
          fire_date:Date.now(),
           // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.
    
          // You can add any additional data that is important for the notification
          // It will be added to the PendingIntent along with the rest of the bundle.
          // e.g.
          data: { value: time},
        };
        setValue(time.toString())
        console.log(alarmNotifData);
        props.add(alarmNotifData);
        console.log(props)
        hideDateTimePicker();
    }
    return(
        <View style={styles.main}>
            <View style={styles.wrapper}>
                <View>
                    <Text style={styles.time}>{value}</Text>
                </View>
                <Pressable style={styles.removeButton}
                        onPress={()=>{
                        }}>
                    <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>Hapus</Text>

                </Pressable>

            </View>
            <Pressable style={styles.removeButton}
                        onPress={showDateTimePicker}>
                    <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>Atur</Text>

                </Pressable>
            
 
            <DateTimePicker
                isVisible={isDateTimePickerVisible}
                onConfirm={handleDatePicker}
                onCancel={hideDateTimePicker}
                mode="time"
                display='default'
      
            />
        </View>
    );
                }


const mapStateToProps=state=>{
    return{};
}

const mapDispatchToProps=dispatch=>{
    return{
        add:alarmNotifObj=>{
            dispatch(addAlarm(alarmNotifObj))
        }
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      width:"100%",
      marginTop:20
    },
    time:{
        color:'black',
        fontSize:30,
        fontWeight:'bold'
    },
    wrapper:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:50
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
    ,
    main:{
        marginBottom:500

    }
  })