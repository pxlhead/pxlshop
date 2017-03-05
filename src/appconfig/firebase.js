import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDCG7KZZBO3YKlq0MF5sZ149jI78aeOt-w',
  authDomain: 'pxlshop-21c30.firebaseapp.com',
  databaseURL: 'https://pxlshop-21c30.firebaseio.com',
  storageBucket: 'pxlshop-21c30.appspot.com',
  messagingSenderId: '1079174567568',
};

const firebaseApp = firebase.initializeApp(config);

export default {
  firebase: firebaseApp,
  dbRef: firebaseApp.database().ref(),
  dbProductsRef: firebaseApp.database().ref('products'),
  dbUsersRef: firebaseApp.database().ref('users'),
  storageAvatarsRef: firebaseApp.storage().ref('avatars'),
  auth: firebaseApp.auth(),
  googleAuth: new firebase.auth.GoogleAuthProvider(),
  emailAuth: firebase.auth.EmailAuthProvider,
};
