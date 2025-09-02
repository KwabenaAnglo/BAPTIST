// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn7_jE1zyhOaZr4g8A-LSxo79F_4_HmZY",
  authDomain: "baptist-6b051.firebaseapp.com",
  databaseURL: "https://baptist-6b051-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "baptist-6b051",
  storageBucket: "baptist-6b051.firebasestorage.app",
  messagingSenderId: "486181166443",
  appId: "1:486181166443:web:25ce3876b82ebf59bc802e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Cloud Firestore
const db = getFirestore(app);

export { auth, db };
