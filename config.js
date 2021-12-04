import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAo7K31B8NVcY1QkaZWsFhbLUxxpKtrQAQ",
  authDomain: "e-library-eabf2.firebaseapp.com",
  projectId: "e-library-eabf2",
  storageBucket: "e-library-eabf2.appspot.com",
  messagingSenderId: "1018952081360",
  appId: "1:1018952081360:web:14d318f9874e560edda3d5"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
