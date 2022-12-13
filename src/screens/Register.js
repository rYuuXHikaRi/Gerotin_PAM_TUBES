import React from 'react';
import {Text,View,Image, TextInput,TouchableOpacity} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";
//class based

const Register = ({navigation}) => {

        return(
            <View style={{backgroundColor:"#414141",height:"100%"}}>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Icon name="arrow-left" size={30} style={{ color: "white" }} />
        </TouchableOpacity> 
                <Image source ={require('../../assets/icon.png')}
                    style={{width:"100%",height:"25%"}}
                />

        
                <View 
                style={{
                    borderRadius:25,
                    borderColor:'red',
                    backgroundColor:"black",
                    border: 'bold',
                    borderWidth:4,
                    padding:30,
                    marginBottom :0,
                    marginTop:10,
                    marginLeft:45,
                    marginRight:45
                }}>
                <Text
                 style={{
                     fontSize:30,
                     fontFamily:"Bold",
                     alignSelf:"center",
                     color:"#ff0000",
                     position: "relative",
                      }}
                >REGISTER</Text>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#ff0000",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                  
                    <TextInput 
                        placeholder="Username"
                        placeholderTextColor="#ffffff"
                        style={{paddingHorizontal:10,color:"white"}}
                    />

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#ff0000",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Email"
                        placeholderTextColor="#ffffff"
                        style={{paddingHorizontal:10,color:"white"}}
                    />

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#ff0000",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Phone"
                        placeholderTextColor="#ffffff"
                        style={{paddingHorizontal:10,color:"white"}}
                    />
                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#ff0000",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#ffffff"
                        style={{paddingHorizontal:10,color:"white"}}
                    />
                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#ff0000",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="#ffffff"
                        style={{paddingHorizontal:10,color:"white"}}
                    />
                    

                </View>
                </View>
                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#ff0000",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"black",
                        fontFamily:"SemiBold"
                        
                    }}onPress={() => navigation.navigate("Login")}>Create Account</Text>
                </View>
                <Text 
                
                onPress={() => navigation.navigate("Login")}
                
                style={{
                    alignSelf:"center",
                    color:"#fff",
                    fontFamily:"SemiBold",
                    paddingVertical:30
                }}>Already have a account?Login</Text>
            </View>
        )
}

export default Register;
