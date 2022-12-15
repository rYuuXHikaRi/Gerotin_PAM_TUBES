import React from 'react';
import {Text,View,Image, TextInput, Pressable} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { firebaseAuthentication } from '../config/firebase'

const Login = ({navigation}) => {
    state = {
        email:'',
        password: ''
    }
    handleChangeField = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const {email, password} = this.state
        firebaseAuthentication.signInWithEmailAndPassword(email, password)
        .then(res=>{
            console.log(res)
            if(res.user.emailVerified){
                this.props.history.push('/home')
            }else{
                alert('Verifikasi email anda terlebih dahulu!')
                firebaseAuthentication.signOut()
            }
        })
        .catch(error=>{
            alert(error.message)
        })
    }

        const {email, password} = this.state
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
                     fontFamily:"Bold",
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
                    value={email} onChange={this.handleChangeField} name="email" label="Email" required
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
                    value={password} onChange={this.handleChangeField} name="password" label="Password" required
                            secureTextEntry
                        style={{paddingHorizontal:10,color:"white"}}
                    />

                    

                </View>

                </View>
               

                <Pressable onSubmit={this.handleSubmit}
                style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#ff0000",
                    paddingVertical:10,
                    borderRadius:23
                }} onPress={() => navigation.navigate("Home")}>
                    <Text style={{
                        color:"black",
                        fontFamily:"SemiBold"
                    }}>Login</Text>
                </Pressable>
                <Text 
                
                onPress={() => navigation.navigate("Register")}
                
                style={{
                    alignSelf:"center",
                    color:"#fff",
                    fontFamily:"SemiBold",
                    paddingVertical:30
                }}>Don't have account? create a new account</Text>
            </View>
        )
}
export default Login;