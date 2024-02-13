import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSUyyjgH85Hg9wqpbu2APo5C51FoEU_TU",
  authDomain: "clone-460da.firebaseapp.com",
  projectId: "clone-460da",
  storageBucket: "clone-460da.appspot.com",
  messagingSenderId: "570902958073",
  appId: "1:570902958073:web:84919a0fdc2283f66db728",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
