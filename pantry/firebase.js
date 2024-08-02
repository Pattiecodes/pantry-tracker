// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOwcapqAn_m9mLLZ5g5ZF9B-mdUex-SKY",
    authDomain: "hspantryapp-63cc5.firebaseapp.com",
    projectId: "hspantryapp-63cc5",
    storageBucket: "hspantryapp-63cc5.appspot.com",
    messagingSenderId: "1037442944968",
    appId: "1:1037442944968:web:54ce9f1bdd329beb197afd"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app, firestore};