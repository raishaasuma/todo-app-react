// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyD83K2ffES_rbVPXbtPh0m9m_S3McR88Yo",
//     authDomain: "todo-app-571d5.firebaseapp.com",
//     projectId: "todo-app-571d5",
//     storageBucket: "todo-app-571d5.appspot.com",
//     messagingSenderId: "968712707864",
//     appId: "1:968712707864:web:59d859fe4861606745886d",
//     measurementId: "G-Q9V5VTFFE5"
//   };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD83K2ffES_rbVPXbtPh0m9m_S3McR88Yo",
    authDomain: "todo-app-571d5.firebaseapp.com",
    projectId: "todo-app-571d5",
    storageBucket: "todo-app-571d5.appspot.com",
    messagingSenderId: "968712707864",
    appId: "1:968712707864:web:59d859fe4861606745886d",
    measurementId: "G-Q9V5VTFFE5"
});

const db = firebaseApp.firestore();

export default db;