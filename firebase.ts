// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZjnLJunjv3SlMxEH1dZm88yiYfQC95c4",
  authDomain: "supermovies-2a210.firebaseapp.com",
  projectId: "supermovies-2a210",
  storageBucket: "supermovies-2a210.appspot.com",
  messagingSenderId: "163962292506",
  appId: "1:163962292506:web:632e2b9a9f0337de1a44a3",
  measurementId: "G-L5Q1DZRF5M",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
