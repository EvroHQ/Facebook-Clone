// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase';
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAhYcVWObVkD7ubZKZqqMCreOc3g3FT1JQ',
  authDomain: 'fb-clone-by-chriskirk.firebaseapp.com',
  projectId: 'fb-clone-by-chriskirk',
  storageBucket: 'fb-clone-by-chriskirk.appspot.com',
  messagingSenderId: '760188336252',
  appId: '1:760188336252:web:79f1d2c88e07388fb3f1f9',
  measurementId: 'G-XZRS68QE8F',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
