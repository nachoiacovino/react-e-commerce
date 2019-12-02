import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDgEIbnaBfZoLgmldLalRe6uappdXcYy8I",
    authDomain: "e-commerce-project-nak.firebaseapp.com",
    databaseURL: "https://e-commerce-project-nak.firebaseio.com",
    projectId: "e-commerce-project-nak",
    storageBucket: "e-commerce-project-nak.appspot.com",
    messagingSenderId: "361587748473",
    appId: "1:361587748473:web:f35edc81de790abfca2ea8",
    measurementId: "G-WYPLK605TW"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = _ => auth.signInWithPopup(provider)

export default firebase