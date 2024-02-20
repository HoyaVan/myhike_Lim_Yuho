//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyCS5CoXXu9EhW-K0deM1V6QnuCpCS4c8sk",
    authDomain: "comp1800-demo-d4c1f.firebaseapp.com",
    projectId: "comp1800-demo-d4c1f",
    storageBucket: "comp1800-demo-d4c1f.appspot.com",
    messagingSenderId: "550632791340",
    appId: "1:550632791340:web:c3aeaaf84a8d56b252a089",
    measurementId: "G-D7F6VFKXFH"
  };
  
//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
