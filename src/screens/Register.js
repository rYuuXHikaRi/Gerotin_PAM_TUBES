import React, {useState} from 'react';
import {Text,View,Image, TextInput,TouchableOpacity, Pressable} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";
import { firebaseAuthentication } from '../config/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification, signOut, updateProfile } from 'firebase/auth'


const Register = ({navigation}) => {
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState('');

    const onSignUpHandle = () => {
        if(email !== null && password !== null) {
            createUserWithEmailAndPassword(firebaseAuthentication,email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                    updateProfile(firebaseAuthentication.currentUser, {
                        displayName: username,
                    }).then(() => {
                        signOut(firebaseAuthentication).then(() => {
                            console.log("Regist sukses coy")
                        }).catch((errors) => {
                            alert(errors.message)
                        })
                    }).catch((error) => {
                        alert(error.message);
                    })
            })
            .catch((err) => {
                alert(err)
            })
        }
    }

        return(
            <View style={{backgroundColor:"#414141",height:"100%"}}>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Icon name="arrow-left" size={30} style={{ color: "white" }} />
        </TouchableOpacity> 
                <Image source ={require('../../assets/icon.png')}
                    style={{width:150,height:150,marginLeft:116,marginTop:10}}
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
                    marginTop:50,
                    marginLeft:35,
                    marginRight:35
                }}>
                <Text
                 style={{
                     fontSize:30,
                     alignSelf:"center",
                     color:"#ff0000",
                     position: "relative",
                      }}
                >REGISTER</Text>
                <View style={{
                      width: "90%",
                      flexDirection:"row",
                      alignItems:"center",
                      marginHorizontal:15,
                      borderWidth:2,
                      marginTop:15,
                      paddingHorizontal:10,
                      borderColor:"#ff0000",
                      borderRadius:23,
                      paddingVertical:2
                }}>
                  
                    <TextInput 
                        value={username}
                        onChangeText={(e) => setUsername(e)}
                        placeholder="Username"
                        placeholderTextColor="#ffffff"
                        style={{paddingHorizontal:10,color:"white"}}
                    />

                </View>
                <View style={{
                     width: "90%",
                     flexDirection:"row",
                     alignItems:"center",
                     marginHorizontal:15,
                     borderWidth:2,
                     marginTop:15,
                     paddingHorizontal:10,
                     borderColor:"#ff0000",
                     borderRadius:23,
                     paddingVertical:2
                }}>
                   
                   <TextInput 
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                        placeholder="Email"
                        placeholderTextColor="#ffffff"
                        style={{paddingHorizontal:10,color:"white"}}
                        
                    />

                </View>
                <View style={{
                     width: "90%",
                     flexDirection:"row",
                     alignItems:"center",
                     marginHorizontal:15,
                     borderWidth:2,
                     marginTop:15,
                     paddingHorizontal:10,
                     borderColor:"#ff0000",
                     borderRadius:23,
                     paddingVertical:2
                }}>
                   
                   <TextInput 
                        value={phoneNumber}
                        onChangeText={(e) => setPhoneNumber(e)}
                        placeholder="Phone"
                        placeholderTextColor="#ffffff"
                        style={{paddingHorizontal:10,color:"white"}}
                    />
                    

                </View>
                <View style={{
                     width: "90%",
                     flexDirection:"row",
                     alignItems:"center",
                     marginHorizontal:15,
                     borderWidth:2,
                     marginTop:15,
                     paddingHorizontal:10,
                     borderColor:"#ff0000",
                     borderRadius:23,
                     paddingVertical:2
                }}>
                   
                   <TextInput 
                        onChangeText={(e) => setPassword(e)}
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#ffffff"
                        style={{paddingHorizontal:10,color:"white"}}
                        
                    />
                    

                </View>
                <View style={{
                     width: "90%",
                     flexDirection:"row",
                     alignItems:"center",
                     marginHorizontal:15,
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
                <Pressable  style={{
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
                        
                    }}onPress={onSignUpHandle}>Create Account</Text>
                </Pressable>
                <Text 
                onPress={() => navigation.navigate("Login")}
                style={{
                    alignSelf:"center",
                    color:"#fff",
                    paddingVertical:30
                }}>Already have a account?Login</Text>
            </View>
        )
}

export default Register;
