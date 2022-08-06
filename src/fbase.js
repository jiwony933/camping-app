import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/compat/app";
import { getAuth } from "firebase/compat/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  project_Id: process.env.REACT_APP_P,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT,
  appId: process.env.REACT_APP_APP_ID,
};

export default firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth();
