import React,{useState,Component} from 'react';
import {Text,View,Image,TextInput, Alert,StyleSheet,Pressable} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {connect} from 'react-redux';
import {addAlarm} from '../src/alarm/actions/alarm'
 
class TimePicker extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isDateTimePickerVisible: false,
        };
      }
    makeid=()=>{
        var length = 5;
        var result = "";
        var characters ="0123456789";
        var charactersLength=characters.length;
        
        for (var i = 0; i < length; i++) {
            result+=characters.charAt(Math.floor(Math.random()* charactersLength));
            
        }
        return result;
    }
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
      };
    
    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
      };
    
    handleDatePicker = ({datetime}) =>{
        

        
        const alarmNotifData = {
          id: this.makeid(), // Required
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
           // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.
    
          // You can add any additional data that is important for the notification
          // It will be added to the PendingIntent along with the rest of the bundle.
          // e.g.
          data: { value: "20:00" },
        };
        console.log(alarmNotifData)
        this.props.add(alarmNotifData);
        this.hideDateTimePicker();
    }
    render(){
    return(
        <View>
            <Pressable style={styles.addButton}
                    onPress={this.showDateTimePicker}>
                <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>+ Tambah Pengingat</Text>
            </Pressable>

            <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicker}
                onCancel={this.hideDateTimePicker}
                mode="datetime"
                display='default'
            />
        </View>
    );
                }
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