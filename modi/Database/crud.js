const { db } = require('./firebaseconfig'); 
const { collection, addDoc, getDoc, getDocs, doc, deleteDoc, updateDoc } = require('firebase/firestore');

// Función para obtener todos los elementos
const getAllMovies = async () => {
    const querySnapshot = await getDocs(collection(db, "movies"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Función para agregar un nuevo elemento
const addMovie = async (caratula, genero, movieId, title, year) => {
    await addDoc(collection(db, "movies"), { caratula, genero, movieId, title, year });
};

// Función para eliminar un elemento
const deleteMovie = async (id) => {
    await deleteDoc(doc(db, "movies", id));
};

// Función para obtener un elemento específico
const getMovieById = async (id) => {
    const movieSnapshot = await getDoc(doc(db, "movies", id));
    return { id: movieSnapshot.id, ...movieSnapshot.data() };
};

// Función para editar un elemento
const updateMovie = async (id, caratula, genero, movieId, title, year) => {
    await updateDoc(doc(db, "movies", id), { caratula, genero, movieId, title, year });
};

// Exportar funciones
module.exports = {
    getAllMovies,
    addMovie,
    deleteMovie,
    getMovieById,
    updateMovie,
};
