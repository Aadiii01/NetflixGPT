// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const Firebase_API = import.meta.env.VITE_APP_Firebase_API;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGLrn2CwssuWV2UTBHVHQn8hcNyxrH3P4",
  authDomain: "netflixgpt-a62a3.firebaseapp.com",
  projectId: "netflixgpt-a62a3",
  storageBucket: "netflixgpt-a62a3.appspot.com",
  messagingSenderId: "299870200400",
  appId: "1:299870200400:web:9772ac4f43a59062012755",
  measurementId: "G-5XZ4DWHJ12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();