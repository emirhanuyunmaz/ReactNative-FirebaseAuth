// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "...",
  projectId: "....",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "YOUR_API_ID"
};

// Initialize Firebase

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth()

export {auth}