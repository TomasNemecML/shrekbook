// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: "AIzaSyCXI0EsIMS8dssxoj2yvC3BMblrJgzIL3c",
    authDomain: "shrekbook-3ad29.firebaseapp.com",
    projectId: "shrekbook-3ad29",
    storageBucket: "shrekbook-3ad29.appspot.com",
    messagingSenderId: "264158690689",
    appId: "1:264158690689:web:b3e88be01340fdc1e97c80",
    measurementId: "G-9SJ3EH21GQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var auth = firebase.auth();