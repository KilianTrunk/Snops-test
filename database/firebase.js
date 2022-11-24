import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAFPwi9K_LqpriwXVkkF-zG9YNX7mnNspw",
    authDomain: "snops-8436f_firebaseapp.com",
    databaseURL: "snops-8436f.firebaseio.com",
    projectId: "snops-8436f",
    storageBucket: "storageBucketsnops-8436f.appspot.com",
    messagingSenderId: "384762965514",
    appId: "1:384762965514:web:612ed891e4854f48d4f9f3" 
};

firebase.initializeApp(firebaseConfig);
export default firebase;
