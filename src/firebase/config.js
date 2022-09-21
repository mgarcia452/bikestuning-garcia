// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCtJBr8iBPh73ERvREHYXNSdAsHWImWSE",
    authDomain: "bikestuning-garcia.firebaseapp.com",
    projectId: "bikestuning-garcia",
    storageBucket: "bikestuning-garcia.appspot.com",
    messagingSenderId: "40390297725",
    appId: "1:40390297725:web:b2e5f1ede2b43bac3ac914"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);






