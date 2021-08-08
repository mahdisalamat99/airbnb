import firebase from 'firebase';


// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

const config = {
        apiKey: "AIzaSyAHudPqGsX6fIG5W_9m363GirMUgKvZ4xk",
        authDomain: "airbnb-d07b1.firebaseapp.com",
        projectId: "airbnb-d07b1",
        storageBucket: "airbnb-d07b1.appspot.com",
        messagingSenderId: "723711548867",
        appId: "1:723711548867:web:9e29c7d3cccbb84443f176",
        measurementId: "G-LNK480CT9Z"    
};

// firebase.initializeApp(config);

const firebaseApp = firebase.initializeApp(config);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider};





// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({   prompt: 'select_account'   });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;