import firebase from 'firebase'

// var firebaseConfig = {
//     apiKey: "AIzaSyD4CapdQuj74Ubf_XybRvhTL6UI7_EmY0I",
//     authDomain: "empiremazda-1bdb3.firebaseapp.com",
//     databaseURL: "https://empiremazda-1bdb3-default-rtdb.firebaseio.com",
//     projectId: "empiremazda-1bdb3",
//     storageBucket: "empiremazda-1bdb3.appspot.com",
//     messagingSenderId: "496930650941",
//     appId: "1:496930650941:web:6bb8c87650b163d693a354",
//     measurementId: "G-RQ80VJHHRC"
// };

const firebaseConfig = {
    apiKey: "AIzaSyD4CapdQuj74Ubf_XybRvhTL6UI7_EmY0I",
    authDomain: "empiremazda-1bdb3.firebaseapp.com",
    databaseURL: "https://empiremazda-1bdb3-default-rtdb.firebaseio.com",
    projectId: "empiremazda-1bdb3",
    storageBucket: "empiremazda-1bdb3.appspot.com",
    messagingSenderId: "496930650941",
    appId: "1:496930650941:web:6bb8c87650b163d693a354",
    measurementId: "G-RQ80VJHHRC"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.database()

export default db;