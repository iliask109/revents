import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "revents-d8edb.firebaseapp.com",
  projectId: "revents-d8edb",
  storageBucket: "revents-d8edb.appspot.com",
  messagingSenderId: "775935901972",
  appId: "1:775935901972:web:afa9e09e1f31bee2a44201",
  measurementId: "G-8BT9G3CJLM",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
