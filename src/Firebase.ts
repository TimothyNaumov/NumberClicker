import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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
export const database = getDatabase(app);

export default app;
