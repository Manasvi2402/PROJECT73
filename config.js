import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBqvFc0OIYymlzz6sqQFQz2YS9Rk9-898E",
  authDomain: "project-71-fb8c7.firebaseapp.com",
  projectId: "project-71-fb8c7",
  storageBucket: "project-71-fb8c7.appspot.com",
  messagingSenderId: "801313495360",
  appId: "1:801313495360:web:a3d6ee26ad6a66adc742a5"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
