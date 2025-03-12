 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  import {getAuth, createUserWithEmailAndPassword}from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAf2nUcC7dOO8SSAZ3lxOiYai3OySQq7CA",
   authDomain: "work-63a7e.firebaseapp.com",
   projectId: "work-63a7e",
   storageBucket: "work-63a7e.firebasestorage.app",
   messagingSenderId: "204528423595",
   appId: "1:204528423595:web:913abfd406cd68fe8eddee",
   measurementId: "G-88SLF3CVQP"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);


const submit = document.getElementById('btn')
submit.addEventListener("click", function(event){
event.preventDefault()


const UserName = document.getElementsByClassName("Username").value
const Pssword = document.getElementsByClassName("Password").value
alert("successfully")

window.location.href = "index.html"


const auth = getAuth();
createUserWithUsernameAndPassword(auth, Username, Password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     alert(errorMessage);
     // ..
   });
 });

















