import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBTbUcpgXNvXNoDnFtYj1G9DTZpkiaqMrM",
  authDomain: "movie-98f6a.firebaseapp.com",
  projectId: "movie-98f6a",
  storageBucket: "movie-98f6a.appspot.com",
  messagingSenderId: "266842701194",
  appId: "1:266842701194:web:9370570c53d9db92dd9c73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize service
export const db = getFirestore(app);
export const auth = getAuth(app);
