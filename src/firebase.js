import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyBaZLzUw3ygvn7It3UlPWtiLsQRdY5XRX0",
	authDomain: "twitter-clone-3984d.firebaseapp.com",
	databaseURL: "https://twitter-clone-3984d.firebaseio.com",
	projectId: "twitter-clone-3984d",
	storageBucket: "twitter-clone-3984d.appspot.com",
	messagingSenderId: "983306052386",
	appId: "1:983306052386:web:08cba2e5f7b0863030bb7b",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
