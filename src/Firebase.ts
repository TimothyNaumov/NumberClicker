import { initializeApp } from "firebase/app";
import { connectDatabaseEmulator, getDatabase } from "firebase/database";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from "@firebase/app-check";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAI7tlamK2-GE6DpBJYcSwKaN-fK6kBaxw",
  authDomain: "random-number-sorter.firebaseapp.com",
  databaseURL: "https://random-number-sorter-default-rtdb.firebaseio.com",
  projectId: "random-number-sorter",
  storageBucket: "random-number-sorter.appspot.com",
  messagingSenderId: "1094295226232",
  appId: "1:1094295226232:web:1073c847baff5982bf6a8d",
  measurementId: "G-TMG13ZRTFX",
};

const app = initializeApp(firebaseConfig);
initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider(
    "6Lf9d6AnAAAAALbEQa9KeberTsJDIMnx3_p0Iy5j"
  ),
  isTokenAutoRefreshEnabled: true, // Set to true to allow auto-refresh.
});

export const database = getDatabase(app);

if (location.hostname === "localhost") {
  // Point to the RTDB emulator running on localhost.
  connectDatabaseEmulator(database, "127.0.0.1", 5002);
} 

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    console.log('Anonymously logged in succesfully');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + errorMessage);
  });

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    console.log("User signed in:", user.uid);
    localStorage.setItem('user_uid', user.uid);
  } else {
    console.log("No user is signed in.");
    localStorage.removeItem('user_uid');
  }
});

export const serverStamp = firebase.firestore.Timestamp;

export default app;
