const { db } = require('./firebaseconfig'); // Importar Firebase
const { collection, addDoc, getDoc, getDocs, doc, deleteDoc, updateDoc } = require('firebase/firestore'); // Firestore funciones

// Función para obtener todos los elementos
const getAllItems = async () => {
    const querySnapshot = await getDocs(collection(db, "songs")); // Cambia "items" por "songs"
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Función para agregar un nuevo elemento
const addItem = async (songName, artistName, coverUrl) => {
    await addDoc(collection(db, "songs"), { songName, artistName, coverUrl }); // Agrega nuevos campos
};

// Función para eliminar un elemento
const deleteItem = async (id) => {
    await deleteDoc(doc(db, "songs", id));
};

// Función para obtener un elemento específico
const getItemById = async (id) => {
    const itemSnapshot = await getDoc(doc(db, "songs", id));
    return { id: itemSnapshot.id, ...itemSnapshot.data() };
};

// Función para editar un elemento
const updateItem = async (id, songName, artistName, coverUrl) => {
    await updateDoc(doc(db, "songs", id), { songName, artistName, coverUrl }); // Agrega nuevos campos
};

// Exportar funciones
module.exports = {
    getAllItems,
    addItem,
    deleteItem,
    getItemById,
    updateItem,
};
