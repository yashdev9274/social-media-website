// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzr1Hlj_pFgzmjbzbZc2DWyEbsxktFDLk",
  authDomain: "social-media-website-8bba1.firebaseapp.com",
  projectId: "social-media-website-8bba1",
  storageBucket: "social-media-website-8bba1.appspot.com",
  messagingSenderId: "954221737189",
  appId: "1:954221737189:web:7dae047bd6ae17a7ba500c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);