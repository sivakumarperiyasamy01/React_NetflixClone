// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABtMiRbemg8vjm9Vdvj2RilrRuitSMaLM",
  authDomain: "netflixgpt-e4aef.firebaseapp.com",
  projectId: "netflixgpt-e4aef",
  storageBucket: "netflixgpt-e4aef.appspot.com",
  messagingSenderId: "1004860772813",
  appId: "1:1004860772813:web:7609b52a7b6355dc657484",
  measurementId: "G-9KJW23LFLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();