import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA0-tCS-C_UPsGT3JnEXLQWs8Egd7JNzhQ",
	authDomain: "e-commerce-753fa.firebaseapp.com",
	projectId: "e-commerce-753fa",
	storageBucket: "e-commerce-753fa.appspot.com",
	messagingSenderId: "218676513951",
	appId: "1:218676513951:web:a395c8bfd2f84d83eea6aa",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
	return app;
}

export function getFirestore() {
	return firebase.firestore(app);
}
