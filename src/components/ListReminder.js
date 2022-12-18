import React, { Component } from 'react';
import { Button, StyleSheet,FlatList, View,Text,Pressable } from 'react-native';
import { connect } from 'react-redux';
import { deleteAlarm } from '../../actions/alarm';
class ListReminder extends Component{
    keyExtractor=(item,index)=>index.toString();
    renderItem=({item})=>{
        return(
            <View style={styles.wrapper}>
            <View>
                <Text style={styles.time}>{item.time.toString()}</Text>
            </View>
            <Pressable style={styles.removeButton}
                    onPress={()=>{
                        
                    
                        this.props.delete(item.value);
                    }}>
                <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>Hapus</Text>

            </Pressable>
        </View>
        )
    }
    render(){
    return(
        <FlatList
            keyExtractor={this.keyExtractor}
            data={this.props.alarms}
            renderItem={this.renderItem}
        />


    );
    }
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



export default connect(mapStateToProps, mapDispatchToProps)(ListReminder);

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