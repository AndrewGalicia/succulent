// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWE6BewR5OWoVplQlj09tEDfKIJAS1i_0",
  authDomain: "succulent-plant-e6e00.firebaseapp.com",
  projectId: "succulent-plant-e6e00",
  storageBucket: "succulent-plant-e6e00.appspot.com",
  messagingSenderId: "1071524614003",
  appId: "1:1071524614003:web:d95a4461c83a4ab754ff06",
  measurementId: "G-YJY0W2GR5T"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
// const analytics = getAnalytics(app);

