import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDJKG2kQRStlz1FFUY4VHQKnhFVDxn8blI",
  authDomain: "crwn-db-49975.firebaseapp.com",
  databaseURL: "https://crwn-db-49975.firebaseio.com",
  projectId: "crwn-db-49975",
  storageBucket: "crwn-db-49975.appspot.com",
  messagingSenderId: "981106580790",
  appId: "1:981106580790:web:deb8ea624ed67350196797",
  measurementId: "G-EH78P4PSP6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth){
      return;
    }

     const userRef = firestore.doc(`users/${userAuth.uid}`);

     const snapShot = await userRef.get();
     
     if(!snapShot.exists) {
       const { displayName, email } = userAuth;
       const createdAt =  new Date();

       try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
       } catch(error) {
        console.log('error creating user', error.message);
       }
     }

    return userRef;
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;