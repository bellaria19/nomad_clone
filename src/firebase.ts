// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgjxjQfOofQd8-b1xtjg6wfLmClNAOQJE",
  authDomain: "nwitter-reloaded-5c2b5.firebaseapp.com",
  projectId: "nwitter-reloaded-5c2b5",
  storageBucket: "nwitter-reloaded-5c2b5.appspot.com",
  messagingSenderId: "991824540894",
  appId: "1:991824540894:web:1ebdf4d13f449e3e177e4f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
