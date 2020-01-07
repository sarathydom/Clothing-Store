// Firebase Imports
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// config object to initilize fire base for the project
const config ={
    apiKey: "AIzaSyAxrMaJuBORG3HR9SwCb5Bzbi35xBQNays",
    authDomain: "myapp-57f8e.firebaseapp.com",
    databaseURL: "https://myapp-57f8e.firebaseio.com",
    projectId: "myapp-57f8e",
    storageBucket: "myapp-57f8e.appspot.com",
    messagingSenderId: "1086354376518",
    appId: "1:1086354376518:web:d353d94a734dc9f07d8747",
    measurementId: "G-MN7Q0B9TBE"
  }

  // Initilizing Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore(); 
  // Google sign in for firebase
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account'})
  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);
  export default firebase;