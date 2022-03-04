import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9SXxNaS5z0ydvzU-QzT2i4ndjOeTOmLU",
    authDomain: "fir-1fbb0.firebaseapp.com",
    projectId: "fir-1fbb0",
    storageBucket: "fir-1fbb0.appspot.com",
    messagingSenderId: "1070522463081",
    appId: "1:1070522463081:web:a9781dd84f13ece8a903f8",
    measurementId: "G-4CRZDJR544"
};

export default firebase.initializeApp(firebaseConfig)