// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhjD9c3HTWiV4k1om2dm46aVTseNKv8oI",
  authDomain: "pokemon-test-ae0ad.firebaseapp.com",
  databaseURL: "https://pokemon-test-ae0ad-default-rtdb.firebaseio.com",
  projectId: "pokemon-test-ae0ad",
  storageBucket: "pokemon-test-ae0ad.appspot.com",
  messagingSenderId: "845785357950",
  appId: "1:845785357950:web:cc089b77d39807c6ed822f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app

