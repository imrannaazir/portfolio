// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfW6DSsvoggd3ecZdeNMmiM1t5531EYpA",
    authDomain: "dev-emon.firebaseapp.com",
    projectId: "dev-emon",
    storageBucket: "dev-emon.appspot.com",
    messagingSenderId: "980610383456",
    appId: "1:980610383456:web:624ee40052835842c8cd05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)