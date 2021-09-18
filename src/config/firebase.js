import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRfvG03xu3gn1dKnprnQk5M5qkeTPorx8",
    authDomain: "auth-react-firebase-1586c.firebaseapp.com",
    projectId: "auth-react-firebase-1586c",
    storageBucket: "auth-react-firebase-1586c.appspot.com",
    messagingSenderId: "514756917994",
    appId: "1:514756917994:web:6155f539d3a3b10"
  // Initialize Firebase
}
const init = firebase.initializeApp(firebaseConfig);
export const firebaseAuthentication = init.auth();
