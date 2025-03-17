// lib/firebase.js
import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';


console.log("API Key:", process.env.REACT_APP_FIREBASE_API_KEY);
console.log("Auth Domain:", process.env.REACT_APP_FIREBASE_AUTH_DOMAIN);

const firebaseConfig = {
    apiKey: "AIzaSyBO8B4ZdhPFTAf-w7NpwGM6mZcy21tFzW0",
    authDomain: "startup-project-31826.firebaseapp.com",
    projectId: "startup-project-31826",
    storageBucket: "startup-project-31826.firebasestorage.app",
    messagingSenderId: "983554497344",
    appId: "1:983554497344:web:5c6ee672a421cd5c2878a5",
};


// Ensure the app is initialized only once
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();