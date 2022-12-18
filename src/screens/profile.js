import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput, Pressable } from 'react-native';
import Icon1 from 'react-native-vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {useRoute} from "@react-navigation/core";
import { SafeAreaView, ScrollView} from 'react-native';

import { firebaseAuthentication } from '../config/firebase'
import { updatePassword } from 'firebase/auth';

const Profile = ({navigation}) => {
  const route = useRoute()
  const [newPassword, setNewPassword] = React.useState("");

  const displayName = route.params.displayName;
  const email = route.params.email;
  const photoURL = route.params.photoURL;

  const handleChangePassword = () => {
    updatePassword(firebaseAuthentication.currentUser, newPassword)
    .then(() => {
      console.log("Sukses coy")
      navigation.navigate("Home", {
        displayName: displayName,
        email: email,
        photoURL: photoURL
      })
    })
    .catch((error) => {
      alert(error.message)
    })
  }

  return (

    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Icon1 name="arrow-back-circle" size={40} color="#FF5151" style={{position:'absolute',paddingTop:35,paddingLeft:20}}/>
      </Pressable>
      <View style={styles.topContainer}>
        <Text style={styles.textTitle}>Profil Pengguna</Text>

        <View style={styles.fotoContainer}>
        </View>

        <Text style={styles.textName}>Crazy Killer</Text>
      </View>
      <View style={styles.bottomContainer}> 
        <Text style={styles.textDetail}>Detail Profil</Text> 
        <View style={styles.profileContainer}>
            
            <View style={styles.dataContainer}>
                <Icon1 name="person" size={35} color="black" style={{marginTop:9}} />
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Nama</Text>
                    <View style={styles.textarea}>
                      <Text>{displayName}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.dataContainer}>
                <Entypo name="email" size={35} color="black" style={{marginTop:9}}/>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.textarea}>
                      <Text>{email}</Text>
                    </View>
                </View>
            </View>

        </View>
        <View style={styles.passwordContainer}>
            <Text style={styles.passwordTitle}>Ubah Kata Sandi</Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputArea}>
                    <TextInput  editable  maxLength={40} style={styles.textInput} placeholder='  Password Lama' />
                    <TextInput  editable  maxLength={40} style={styles.textInput} onChangeText={(e) => setNewPassword(e)} placeholder='  Password Baru' />
                    <TextInput  editable  maxLength={40} style={styles.textInput} placeholder='  Konfirmasi Password Baru'/>
                </View>
                <View style={styles.optionButton}>
                    <Pressable style={styles.okButton} onPress={handleChangePassword}>
                        <Text style={styles.okText}>Ok</Text>
                    </Pressable>
                    <Pressable style={styles.cancelButton} onPress={() => navigation.navigate("Home", {
                      displayName: displayName,
                      email: email
                    })}>
                        <Text style={styles.cancelText}>Batal</Text>
                    </Pressable>
                </View>
            </View>

        </View>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    width:"100%",
    marginTop:20
  },
  topContainer :{
    height:"45%",
    width:"100%",
    marginTop:2,
    textAlign:'left',
    alignItems:'center',
    paddingTop:'10%'
  },
  bottomContainer:{
    backgroundColor:'#FF5151',
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    width:'100%',
    alignItems:'center',
    textAlign:'center',
    height:'100%',
    paddingTop:30
  },
  fotoContainer:{
    height:150,
    width:150,
    alignContent:'center',
    backgroundColor:'#FF5151',
    borderRadius:80
  },
  titleContainer:{
    height:40,
    width:200,
    marginBottom:'5%',
    justifyContent:'center',
    alignItems:'center'
  },
  textTitle:{
    fontSize:20,
    fontWeight:'bold',
    color:'#FF5151',
    marginBottom:'5%'
  },

  textName:{
    fontSize:20,
    fontWeight:'bold',
    color:'#FF5151',
    marginTop:'5%'
  },
  textDetail:{
    fontWeight:'bold',
    fontSize:20,
  },

  dataContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:5
  },
  textarea:{
    height:30,
    width:250,
    backgroundColor:'white',
    borderRadius:5,

    padding: 5
  },
  label:{
    fontWeight:'bold',
    marginBottom:3,
  },
  labelContainer:{
    marginLeft:15
  },

  passwordContainer:{
    display:'flex',
    flexDirection:'column',
    marginTop:'5%'
  },
  inputContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textInput:{
    height:30,
    width:250,
    backgroundColor:'white',
    marginBottom:10,
    paddingLeft:7,
    borderRadius:5
  },
  passwordTitle:{
    fontWeight:'bold',
    marginBottom:5
  },

  okButton:{
    width:100,
    height:50,
    backgroundColor:'#FF5151',
    borderRadius:20,
    borderWidth:2,
    borderColor:'white',
    justifyContent:'center',
    alignItems:'center',
  },
  okText:{
    color:'black',
    fontWeight:'bold',
    fontSize:20
  },
  cancelButton:{
    width:100,
    height:50,
    backgroundColor:'black',
    borderRadius:20,
    borderWidth:2,
    borderColor:'white',
    justifyContent:'center',
    alignItems:'center'
  },
  cancelText:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  optionButton:{
    justifyContent:'space-between',
    marginLeft:20
    
  }
  

})