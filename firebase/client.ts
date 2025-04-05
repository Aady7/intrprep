// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLGUJ2Ri939PbnH3r_DFj8dZvWwoBgFTU",
  authDomain: "interprep-c23f2.firebaseapp.com",
  projectId: "interprep-c23f2",
  storageBucket: "interprep-c23f2.firebasestorage.app",
  messagingSenderId: "1038828652437",
  appId: "1:1038828652437:web:4de0e2acffdec21b3a189c",
  measurementId: "G-C21TL8CN54"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);