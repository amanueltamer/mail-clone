import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBP4U1Fg00KEo1jQThXOr0JmZfy-aS87ZE",
    authDomain: "mail-clone-b8929.firebaseapp.com",
    projectId: "mail-clone-b8929",
    storageBucket: "mail-clone-b8929.appspot.com",
    messagingSenderId: "528116769790",
    appId: "1:528116769790:web:db8db792231ed390e296af"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };