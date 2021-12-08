import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDwRDoYQSNhMVGBgkW6eOPs04axOCh-k6U",
    authDomain: "em-code-book.firebaseapp.com",
    projectId: "em-code-book",
    storageBucket: "em-code-book.appspot.com",
    messagingSenderId: "372240297375",
    appId: "1:372240297375:web:607a99d11cc842c34ee1aa"
};

initializeApp(firebaseConfig)

const db = getFirestore()

export { db }