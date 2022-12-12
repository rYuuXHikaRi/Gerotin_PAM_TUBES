import React, {useEffect} from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class splashscreen extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            
            <View style={{backgroundColor:"#000000",height:"100%"}}>
                <Image source ={require('../images/SplashBackground.png')}
                    style={{width:"100%",height:"90%",backgroundColor:"black",
                    border: 'bold',
                    borderWidth:4,
                    }}
            
                />
                
                <Text 
                onPress={()=>navigate('Login')}
                style={{
                    alignSelf:"center",
                    color:"#fff",
                    fontFamily:"SemiBold",
                    paddingVertical:30
                }}>Press to continue</Text>
            </View>
        )
    }
}