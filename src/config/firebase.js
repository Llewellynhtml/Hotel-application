
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCCFG82eDCwOitIFqviNQLJEYcFbkcrz1o",
  authDomain: "hotel-main-2ddec.firebaseapp.com",
  projectId: "hotel-main-2ddec",
  storageBucket: "hotel-main-2ddec.appspot.com",
  messagingSenderId: "510691582192",
  appId: "1:510691582192:web:dd3c72d85cf323b1d06235",
  measurementId: "G-1BT2TJJFPT"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

