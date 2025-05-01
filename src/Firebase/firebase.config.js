// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8W6V8hkUuMIk_I0Nw67PNgUrRAjy9Nng",
  authDomain: "dragon-news-87053.firebaseapp.com",
  projectId: "dragon-news-87053",
  storageBucket: "dragon-news-87053.firebasestorage.app",
  messagingSenderId: "826802322546",
  appId: "1:826802322546:web:ab12f44a911b62e20616eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)