// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCFG82eDCwOitIFqviNQLJEYcFbkcrz1o",
  authDomain: "hotel-main-2ddec.firebaseapp.com",
  projectId: "hotel-main-2ddec",
  storageBucket: "hotel-main-2ddec.appspot.com",
  messagingSenderId: "510691582192",
  appId: "1:510691582192:web:dd3c72d85cf323b1d06235",
  measurementId: "G-1BT2TJJFPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);