import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyApQge_yhOgvvNoUqpeP1dJfvvAIAeH8-U",
  authDomain: "christmas-list-react.firebaseapp.com",
  projectId: "christmas-list-react",
  storageBucket: "christmas-list-react.appspot.com",
  messagingSenderId: "193105514664",
  appId: "1:193105514664:web:ebf7ab39592ca8b5bd729d"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { app, db }