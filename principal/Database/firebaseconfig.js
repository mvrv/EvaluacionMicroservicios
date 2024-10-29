// firebaseconfig.js
const { initializeApp } = require("firebase/app");
const { getFirestore } = require('firebase/firestore');
const { getStorage } = require('firebase/storage');

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB7qNrDVxvadXuMiMFxM8Sr92ieo7Xl1C0",
  authDomain: "microservicios-39ac5.firebaseapp.com",
  projectId: "microservicios-39ac5",
  storageBucket: "microservicios-39ac5.appspot.com",
  messagingSenderId: "809685620915",
  appId: "1:809685620915:web:570757aa4f4a6c76b8b8c6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// Exportar db y storage
module.exports = { db, storage };
