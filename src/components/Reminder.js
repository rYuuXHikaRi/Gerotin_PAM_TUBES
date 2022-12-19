import React, { Component } from 'react';
import { Button, StyleSheet,FlatList, View,Text,Pressable } from 'react-native';
import { connect } from 'react-redux';
import { deleteAlarm } from '../../actions/alarm';
const Reminder=(props)=>{
    const keyExtractor=(item,index)=>index.toString();
    const renderItem=({item})=>{
        return(
            <View style={styles.wrapper}>
            <View>
                <Text style={styles.time}>{item.time.toString()}</Text>
            </View>
            <Pressable style={styles.removeButton}
                    onPress={()=>{
                        props.delete(item.value);
                    }}>
                <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>Hapus</Text>

            </Pressable>
        </View>
        )
    }

    return(
        <FlatList
            keyExtractor={keyExtractor}
            data={props.alarms}
            renderItem={renderItem}

        
        />


    );
    }


const mapStateToProps=state=>{
    return{
        alarms:state.alarms.alarms,
    };
};

const mapDispatchToProps=dispatch=>{
    return{
        delete:value=>{
            dispatch(deleteAlarm(value));
        },
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Reminder);

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