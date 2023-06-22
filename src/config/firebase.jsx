import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5P3GbQiZ2Y3SMHi7Mbr4szhsP-W3Jf5I",
  authDomain: "oasis-homestay-management.firebaseapp.com",
  projectId: "oasis-homestay-management",
  storageBucket: "oasis-homestay-management.appspot.com",
  messagingSenderId: "739012589111",
  appId: "1:739012589111:web:c4bb70fc9084e78401f1b2",
  measurementId: "G-9SRFLN45S2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

//for database
export const db = getFirestore(app);

getFirestore();