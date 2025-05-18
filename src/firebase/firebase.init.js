// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZSemBmYDaAH017rFnk618geg3CHKtAlg",
  authDomain: "coffee-shop-app-bb78e.firebaseapp.com",
  projectId: "coffee-shop-app-bb78e",
  storageBucket: "coffee-shop-app-bb78e.firebasestorage.app",
  messagingSenderId: "705060356591",
  appId: "1:705060356591:web:cfa3594a7bc057b596361a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);