import React,{useState} from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

const Login =
    ({
        user,
        setAuthState,
        setUser
    })=>
{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleLogin = () => {
        if(email !== null && password !== null) {
            signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setUser(email)
                setAuthState('home')
            })
            .catch((err) => alert(err));
        }
    }

  
        const {navigate} = this.props.navigation
        return(
            
            <View style={{backgroundColor:"#414141",height:"100%"}}>
                <Image source ={require('../images/image.jpg')}
                    style={{width:"100%",height:"25%"}}
                />
                <View 
                style={{
                    borderColor:'red',
                    borderRadius:25,
                    backgroundColor:"black",
                    border: 'bold',
                    borderWidth:4,
                    padding:30,
                    margin:45
                }}>
                <Text
                 style={{
                     fontSize:30,
                     fontFamily:"Bold",
                     alignSelf:"center",
                     color:"#ff0000",
                     position: "relative",
                     
                 }}
                >LOGIN</Text>
                
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
                    <Icon name="mail" color="#ff0000" size={24}/>
                    <TextInput placeholder="Email"
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
                    <Icon name="key" color="#ff0000" size={24}/>
                    <TextInput placeholder="Password"
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
                    }}>Login</Text>
                </View>
                <Text 
                
                onPress={()=>navigate('Register')}
                
                style={{
                    alignSelf:"center",
                    color:"#fff",
                    fontFamily:"SemiBold",
                    paddingVertical:30
                }}>Don't have account? create a new account</Text>
            </View>
        )
    }

    export default Login