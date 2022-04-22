import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDUFlGic7SOS387euZh38aGoALu7NwAkAU",
    authDomain: "iot8266-a1396.firebaseapp.com",
    databaseURL: "https://iot8266-a1396-default-rtdb.firebaseio.com",
    projectId: "iot8266-a1396",
    storageBucket: "iot8266-a1396.appspot.com",
    messagingSenderId: "597210463017",
    appId: "1:597210463017:web:13d8b94a30ba4a52301538",
    measurementId: "G-F4HDYDVXKV"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;