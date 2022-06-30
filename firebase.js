// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBKc5c3AFhGIM23i2KdAQFk-fRDz5ObPi8',
  authDomain: 'reaction-timer-a77bd.firebaseapp.com',
  projectId: 'reaction-timer-a77bd',
  storageBucket: 'reaction-timer-a77bd.appspot.com',
  messagingSenderId: '869567434123',
  appId: '1:869567434123:web:590a768daf74141764738e',
  measurementId: 'G-SKKB5YR4FK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
