'use strict';

function initializeFirebase(){
  var config = {
    apiKey: "AIzaSyBDV1xH1vjy5e828BKvsBhFwDhbDiyyFEk",
    authDomain: "peer-programming-application.firebaseapp.com",
    databaseURL: "https://peer-programming-application.firebaseio.com",
    storageBucket: "peer-programming-application.appspot.com",
    messagingSenderId: "1058474997451"
  };
  firebase.initializeApp(config);
  console.log('fireBase just got initialized.');
}

function AuthApp(button, email, password, isSignIn, password2){
  
  this.initFireBase();

  this.email = email;
  this.password = password;
  this.firstTime = true;  
  if (isSignIn){
    this.signInButton = button;
    if (this.signInButton != null){
      this.signInButton.addEventListener ('click', this.signIn.bind(this));
    }
  } else{
    this.signUpButton = button;
    this.password2 = password2;
    if (this.signUpButton != null){
      this.signUpButton.addEventListener ('click', this.signUp.bind(this));
    }
  }
}

AuthApp.prototype.initFireBase = function(){
  this.auth = firebase.auth();
  this.database = firebase.database();
  
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

AuthApp.prototype.signUp = function (event){
  event.preventDefault();
  console.log(this.password.value);
  console.log(this.password2.value);
  if (this.password.value === this.password2.value){
    var user = this.auth.createUserWithEmailAndPassword(this.email.value, this.password.value);
  
    console.log(user);
    user.catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorMessage == 'auth/weak-password'){
        alert('The password is too weak.');
      }
      else{
        alert(errorMessage);
      }
      console.log(error);
    });
  } else{
    alert("The passwords don't match.");
  }
}

AuthApp.prototype.signIn = function (event){
  console.log('Sign In just got called.');
  event.preventDefault();

  var user = this.auth.signInWithEmailAndPassword(this.email.value, this.password.value);
  
  user.catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}

AuthApp.prototype.signOut = function(){
  console.log("sign out called");
  this.auth.signOut();
}

AuthApp.prototype.onAuthStateChanged = function(user){
  console.log(user);
  console.log("onAuthStateChanged is executed");

  if (user){
    console.log(user.email + ' is signed in.');
    window.alert('Signed in ' + user.email);
    window.location.href = "landingpage";
  }
  else{
    console.log('No user signed in');
  }
}