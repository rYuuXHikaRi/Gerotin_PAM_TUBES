// Import the functions you need from the SDKs you need
import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQKx8wn5b27XM7_s0sqTRX0WMSTMQg8nw",
  authDomain: "gerotin-pam.firebaseapp.com",
  projectId: "gerotin-pam",
  storageBucket: "gerotin-pam.appspot.com",
  messagingSenderId: "1084169292094",
  appId: "1:1084169292094:web:877cd30ec3efce2323446f",
  measurementId: "G-7GZZ7Q7HCJ"
};

// Initialize Firebase
const init = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuthentication = init.auth();