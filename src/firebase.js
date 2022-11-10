// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAIDszM23QpQ2cZvdsXiD0qPRQrEtDE0ZA",
  authDomain: "iot-app-itesm.firebaseapp.com",
  databaseURL: "https://iot-app-itesm-default-rtdb.firebaseio.com",
  projectId: "iot-app-itesm",
  storageBucket: "iot-app-itesm.appspot.com",
  messagingSenderId: "218937186371",
  appId: "1:218937186371:web:6b5285bf046c5062f85cf6",
  measurementId: "G-34BJPVSGJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);