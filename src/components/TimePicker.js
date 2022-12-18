import React,{useState,Component} from 'react';
import {Text,View,Image,TextInput, Alert,StyleSheet,Pressable} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {connect} from 'react-redux';
import{addAlarm} from "../../actions/alarm";
 
class TimePicker extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isDateTimePickerVisible: false,
        };
      }
    // const [isDateTimePickerVisible,setIsDateTimePickerVisible]=useState(false);
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

    handleDatePicker=datetime=>{
        var currentTime=Date.now();
        const fireDate=ReactNativeAN.parseDate(datetime);
        console.log('A date has been picked: ', fireDate);

        const alarmNotifData={
            id:this.makeid(),
            title:"Alarm RInging",
            message:"My Notification Message",
            channel: "alarm-channel",
            ticker:"My Notification Message",
            auto_canel:true,
            vibrate:true,
            vibration:100,
            small_icon:"ic_launcher",
            large_icon:"ic_launcher",
            play_sound:true,
            sound_name:null,
            color:"red",
            schedule_once:true,
            tag:"some_tag",
            fire_date:fireDate,
            date:{value:datetime},
        }
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