import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyCEtQj6jChlCToOJrRsesVQOoXoT5Gstdo",
    authDomain: "react-contact-form1.firebaseapp.com",
    databaseURL: "https://react-contact-form1.firebaseio.com",
    projectId: "react-contact-form1",
    storageBucket: "react-contact-form1.appspot.com",
    messagingSenderId: "1097220887938",
    appId: "1:1097220887938:web:98264fae1a4cffbed76b9b"

})

var db = firebaseApp.firestore();

export { db };