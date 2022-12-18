import React from 'react';
import {Text,View,Image, TextInput, Pressable} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { firebaseAuthentication } from '../config/firebase'



const Login = ({navigation}) => {
    
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const handleLogin = () => {
        if(email !== null && password !== null) {
            signInWithEmailAndPassword(firebaseAuthentication, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate("AuthObserver")
            })
            .catch((err) => alert(err));
        }
    }
        return(
            <View style={{backgroundColor:"#414141",height:"100%"}}>
                <Image source ={require('../../assets/icon.png')}
                    style={{width:100,height:100,marginLeft:146,marginTop:50}}
                />
                <View 
                style={{
                    borderColor:'red',
                    borderRadius:25,
                    backgroundColor:"black",
                    border: 'bold',
                    borderWidth:4,
                    padding:30,
                    margin:45,
                    marginTop:110
                }}>
                <Text
                 style={{
                     fontSize:30,
                     alignSelf:"center",
                     color:"#ff0000",
                     position: "relative",
                     
                 }}
                >LOGIN</Text>
                
                <View style={{
                    width: "90%",
                    flexDirection:"row",
                    marginHorizontal: 15,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#ff0000",
                    borderRadius:23,
                    paddingVertical:2
                    
                }}>
                    <Icon name="mail" color="#ff0000" size={24}/>
                    <TextInput placeholder="Email"
                               placeholderTextColor="#ffffff"
                               onChangeText={(e) => setEmail(e)}
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
                    <Icon name="key" color="#ff0000" size={24}/>
                    <TextInput placeholder="Password"
                               placeholderTextColor="#ffffff"
                               onChangeText={(e) => setPassword(e)}
                               secureTextEntry
                               style={{paddingHorizontal:10,color:"white"}}
                    />
                </View>

                </View>
               

                <Pressable 
                style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#ff0000",
                    paddingVertical:10,
                    borderRadius:23
                }}onPress={handleLogin}
                >
                    <Text style={{
                        color:"black",
                    }}>Login</Text>
                </Pressable>
                <Text 
                
               // onClick={() => setAuthState('register')}
                onPress={() => navigation.navigate("Register")}
                style={{
                    alignSelf:"center",
                    color:"#fff",
                    paddingVertical:30
                }}>Don't have account? create a new account</Text>
            </View>

        )}
export default Login;
