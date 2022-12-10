// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-_mOZtPJV2Fq61AjdftqxIztK4Gk6vjI",
    authDomain: "realtor-clone-12be1.firebaseapp.com",
    projectId: "realtor-clone-12be1",
    storageBucket: "realtor-clone-12be1.appspot.com",
    messagingSenderId: "37484302462",
    appId: "1:37484302462:web:fa9f3a44fe3601681e482f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()