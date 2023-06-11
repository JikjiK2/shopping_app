/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/database"
import "firebase/compat/storage"
import "firebase/compat/firestore"
import firebase from "firebase/compat/app"
*/
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/database"
import "firebase/compat/storage"
import "firebase/compat/firestore"
import firebase from "firebase/compat/app"
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// 내꺼
// const firebaseConfig = {
//   apiKey: "AIzaSyC0KFsFJEmV30_ORCtU8LLV4bgjQHFWMh8",
//   authDomain: "reactnativeo.firebaseapp.com",
//   databaseURL: "https://reactnativeo-default-rtdb.asia-southeast1.firebasedatabase.app/",
//   projectId: "reactnativeo",
//   storageBucket: "reactnativeo.appspot.com",
//   messagingSenderId: "769362626315",
//   appId: "1:769362626315:web:4b0c80d6cf146af182440e",
//   measurementId: "G-1HPKTE7WZT",
  
// };
// 김창연꺼
const firebaseConfig = {
  apiKey: "AIzaSyDO7h9trUmWjT5-yZ6phkKBXWy7LHldgJs",
  authDomain: "test-7cf9e.firebaseapp.com",
  databaseURL: "https://test-7cf9e-default-rtdb.firebaseio.com",
  projectId: "test-7cf9e",
  storageBucket: "test-7cf9e.appspot.com",
  messagingSenderId: "427668302554",
  appId: "1:427668302554:web:6044ce31ddcea12226d3e3",
  measurementId: "G-K29BP5YM2T"
};
// Initialize Firebase
/*
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
*/

const app = firebase.initializeApp(firebaseConfig);
const firestore = getFirestore();
// const auth = getAuth(app);


export { firestore };