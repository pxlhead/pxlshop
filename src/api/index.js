import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDKUP3mbEzpUNkcACsIVPiXDkhOqCVW_W8',
  authDomain: 'pxlshopcom.firebaseapp.com',
  storageBucket: 'pxlshopcom.appspot.com',
  projectId: 'pxlshopcom'
};

firebase.initializeApp(config);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

// products
export function fetchProducts({ sort, limit, last }) {
  const order = sort === 'new' ? 'time' : 'avgRating';
  let query = db.collection('products').orderBy(order, 'desc');
  if (last) query = query.startAfter(last);
  return query.limit(limit).get();
}

// export function rateProduct(id) {}

// user
export function signUpUser(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function signInUser(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function signInUserRedirect(method) {
  const provider = new firebase.auth[`${method}AuthProvider`]();
  auth.signInWithRedirect(provider);
  return auth.getRedirectResult();
}

export function getSignedUser() {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      } else {
        reject(Error('No user here'));
      }
    });
  });
}

export function signOutUser() {
  return auth.signOut();
}

export function uploadUserPhoto(file, uid) {
  return storage.ref('avatars').child(uid).put(file);
}

export function getUserPhotoURL(uid) {
  return storage.ref('avatars').child(uid).getDownloadURL();
}

export function deleteUserPhoto(uid) {
  return storage.ref('avatars').child(uid).delete();
}

export function reauthenticateUser(user, password) {
  const credential = auth.EmailAuthProvider.credential(user.email, password);
  return user.reauthenticateWithCredential(credential);
}
