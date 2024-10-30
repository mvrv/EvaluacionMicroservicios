// firebaseconfig.js
const { initializeApp } = require("firebase/app");
const { getFirestore } = require('firebase/firestore');
const { getStorage } = require('firebase/storage');

const firebaseConfig = {
    apiKey: "AIzaSyAM4jhrnUfJK6Ag8YCvHpIeIvkYyOvVgQ0",
    authDomain: "edos-84ac7.firebaseapp.com",
    projectId: "edos-84ac7",
    storageBucket: "edos-84ac7.appspot.com",
    messagingSenderId: "203612801716",
    appId: "1:203612801716:web:75d8f8d938d8b20ad025e1",
    measurementId: "G-GDR70HLWX7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

module.exports = { db, storage };
