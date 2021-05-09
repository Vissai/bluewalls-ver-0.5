import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyDa_a6Oj7nSWxSbiKLDsiCumAFxfuU3t-4",
    authDomain: "bluewalls-ef2f6.firebaseapp.com",
    projectId: "bluewalls-ef2f6",
    storageBucket: "bluewalls-ef2f6.appspot.com",
    messagingSenderId: "542223932740",
    appId: "1:542223932740:web:f2e2f2c1671ccf906b4b11",
    measurementId: "G-2WGMSLJSM0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;