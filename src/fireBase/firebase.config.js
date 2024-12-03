// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWroLaDSjLF_OP7GPz0CDW3WrqV7AZaMU",
  authDomain: "movie-portal-8d98d.firebaseapp.com",
  projectId: "movie-portal-8d98d",
  storageBucket: "movie-portal-8d98d.firebasestorage.app",
  messagingSenderId: "775079604293",
  appId: "1:775079604293:web:70e5d4b6a85ae34839732c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
export default auth