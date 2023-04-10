// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGtGTUsHWfDy1WKQbNw62KnHcf24x_Iho",
  authDomain: "login-with-firebase-9648d.firebaseapp.com",
  databaseURL:
    "https://login-with-firebase-9648d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "login-with-firebase-9648d",
  storageBucket: "login-with-firebase-9648d.appspot.com",
  messagingSenderId: "440232833390",
  appId: "1:440232833390:web:7e1e8a3bb8bcf5e30c917f",
  measurementId: "G-PC1JPRQ9M3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
var database = getDatabase(app);

var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var copassword = document.getElementById("copassword");
window.signup = function (e) {
  if (password)
    if (username.value == "" || email.value == "" || password.value == "") {
      alert("All Field Are Required");
    }
  if (password.value == copassword.value) {
  } else {
    alert("Password Confirmation is Wrong");
    return false;
  }

  e.preventDefault();
  var obj = {
    username: username.value,
    email: email.value,
    password: password.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      console.log(success.user.uid)
      let user = auth.currentUser;
      console.log(user.uid)
      set(ref(database, "users/" + user.uid), {
        username: username.value,
        email: email.value,
      });
      alert("signup successfully");
      window.location.replace("signIn.html");
    })
    .catch(function (err) {
      alert("Error in " + err);
    });
  console.log(obj);
};

window.signIn = function (e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      alert("logined Successfully");
      var aaaa = success.user.uid;
      console.log(aaaa, obj.email);
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${aaaa}/username`)).then((snapshot) => {
        if (snapshot.exists()) {
          localStorage.clear();
          localStorage.setItem('user', snapshot.val());
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
      // localStorage.setItem("uid", aaaa);

      window.location.replace("shop.html");
    })
    .catch(function (err) {
      alert("login error" + err);
    });
  console.log(obj);
};