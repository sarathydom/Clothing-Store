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

  // Query for user
  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;
    // Query inside fire store if it exists
    // query refference or query snapshot returns from firebase
    // eaither document or collection
    // Query referece is current place in database
    let userRef = firestore.doc(`users/${userAuth.uid}`);
    let snapShot = await userRef.get();
    if(!snapShot.exists){
       const {displayName,email} = userAuth;
       const createdAt = new Date() ; 
       try{
        await userRef.set({
           displayName, 
           email,
           createdAt,
           ...additionalData
         })
       }catch(e){
         console.log('---- \n Error Creating User : \n',e,'\n ------ \n')
       } 
    }
    return userRef;
  }
  export default firebase;