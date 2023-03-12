import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

//we need to somehow seed the database

//we need a config here, put your api details here
const config = {
  apiKey: 'AIzaSyCCQ4RmXZP_BSdHMDW-6OJhsbfbzNUbzz8',
  authDomain: 'netflix-clone-8e142.firebaseapp.com',
  projectId: 'netflix-clone-8e142',
  storageBucket: 'netflix-clone-8e142.appspot.com',
  messagingSenderId: '552253259125',
  appId: '1:552253259125:web:23ebadd8e522d948ba673c',
  measurementId: 'G-Y8KEFBG54N',
};

const firebase = Firebase.initializeApp(config);

//dont uncomment this bcz it will dupliacte the database on firebase
//seedDatabase(firebase);

export { firebase };
