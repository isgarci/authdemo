
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = require('./firebaseConfig.json');

const firebaseConfig = config

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };

/*
import { firebase } from "firebase/compat/app";
import { getAuth } from 'firebase/compat/auth';
import { getDatabase } from "firebase/compat/database";


const firebase = getFirebase();
const auth = getAuth();
const database = getDatabase();

firebase.initializeApp('./firebaseConfig.json');

export { auth, firebase, database };
*/
