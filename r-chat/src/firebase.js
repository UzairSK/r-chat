import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDiAN80kjUgMAqJTbQ2mD6XR0qQCkGSBWY",
    authDomain: "r-chat-2dd1c.firebaseapp.com",
    projectId: "r-chat-2dd1c",
    storageBucket: "r-chat-2dd1c.appspot.com",
    messagingSenderId: "555785643789",
    appId: "1:555785643789:web:67a8fd89d0593275fe3244",
    measurementId: "G-8337Q249TB"
  }; 

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  
  export {auth, provider};
  export default db;