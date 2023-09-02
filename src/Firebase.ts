import { initializeApp } from "firebase/app";
import {
  connectDatabaseEmulator,
  get,
  getDatabase,
  ref,
  set,
} from "firebase/database";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from "@firebase/app-check";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import UAParser from "ua-parser-js";

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
    console.log("Anonymously logged in succesfully");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + errorMessage);
  });

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    localStorage.setItem("user_uid", uid);

    const userProfileRef = ref(database, `users/${uid}/profile`);

    //Check if user already exists
    get(userProfileRef)
      .then(async (snapshot) => {
        if (!snapshot.exists()) {
          //If the user does not already exist, set some initial data
          const timestamp = serverStamp.now();

          const userAgentString = navigator.userAgent;
          const parser = new UAParser(userAgentString);
          const userAgent = parser.getResult();

          // Replace undefined values with 'unknown' (or any other default value)
          const sanitizedUserAgent = JSON.parse(
            JSON.stringify(userAgent, (key, value) => {
              if (value === undefined) {
                return "unknown";
              }
              return value;
            })
          );

          set(userProfileRef, {
            createdAt: timestamp,
            userAgent: sanitizedUserAgent,
          }).catch((error) => {
            console.error("Error writing score:", error);
          });
        }
      })
      .catch((error) => {
        console.error("Error getting data:", error);
      });

    const userStatsRef = ref(database, `users/${uid}/stats`);
    get(userStatsRef)
      .then(async (snapshot) => {
        if (!snapshot.exists()) {
          set(userStatsRef, {
            points: 100,
          }).catch((error) => {
            console.error("Error writing score:", error);
          });
        }
      })
      .catch((error) => {
        console.error("Error getting data:", error);
      });
  } else {
    localStorage.removeItem("user_uid");
  }
});

export const serverStamp = firebase.firestore.Timestamp;

export default app;
