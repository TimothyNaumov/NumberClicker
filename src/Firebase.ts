import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from "@firebase/app-check";

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

export default app;
