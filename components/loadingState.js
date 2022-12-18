import { onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from "react";
import ReactObserver from "react-event-observer";
import {useRoute} from "@react-navigation/core";

//local component
import { firebaseAuthentication } from "../src/config/firebase";


const AuthObserver = ({navigation}) => {
    onAuthStateChanged(firebaseAuthentication, (user) => {
        if(user) {
            console.log("Sukses Coy")
            navigation.navigate("Home", {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            })
        } else {
            console.log("Logout Coy")
            navigation.navigate("Login")
        }
    })
}

export default AuthObserver;