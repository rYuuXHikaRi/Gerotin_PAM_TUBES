import { onAuthStateChanged } from "firebase/auth";
import {useState, useEffect} from "react";
import ReactObserver from "react-event-observer";
import {useRoute} from "@react-navigation/core";

//local component
import { firebaseAuthentication } from "../src/config/firebase";
/*
const firebaseObserver = ReactObserver()

console.log("Observer")
function loggedIn(){
    return !!firebaseAuthentication.currentUser;
}

firebaseAuthentication.onAuthStateChanged(function(user) {
    firebaseObserver.publish("authStateChanged", loggedIn())
});

const AuthObserver = ({navigation}) => {
    const [authenticated, setAuthenticated] = useState(loggedIn());
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        firebaseObserver.subscribe("authStateChanged", data => {
            setAuthenticated(data);
            setIsLoading(false);
        });

        return () => {firebaseObserver.unsubscribe('authStateChanged');}
    }, []);

    console.log("isAuth: " + authenticated)
    function checkAuth() {
        if(isLoading) {
            console.log("")
        } else {
            if(authenticated) {
                console.log("enterHome")
                navigation.navigate("Home")
            } else {
                console.log("enterLogin")
                navigation.navigate("Login")
            }
        }
    }
    return (
       checkAuth()
    )
} */


const AuthObserver = ({navigation}) => {
    onAuthStateChanged(firebaseAuthentication, (user) => {
        if(user) {
            console.log("Sukses Coy")
            navigation.navigate("Home")
        } else {
            console.log("Logout Coy")
            navigation.navigate("Login")
        }
    })
}


export default AuthObserver;