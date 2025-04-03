import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEUbxnsQ2vkXYQO1hdhF1SYBFc9aTdUUA",
  authDomain: "fir-d4c69.firebaseapp.com",
  projectId: "fir-d4c69",
  storageBucket: "fir-d4c69.firebasestorage.app",
  messagingSenderId: "853708301813",
  appId: "1:853708301813:web:00fc0c93ef8c0a15a86cbc",
  measurementId: "G-GW2QVZJJ18"
};

// Initialize Firebase
let app, auth, db

// We'll initialize these in a client-side effect
export { app, auth, db }

// Client-side initialization function
export function initializeFirebase() {
  if (typeof window === "undefined") return { app: null, auth: null, db: null }

  if (!app) {
    app = initializeApp(firebaseConfig)
    auth = getAuth(app)
    db = getFirestore(app)
  }

  return { app, auth, db }
}
