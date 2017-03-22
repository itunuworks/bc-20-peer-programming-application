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

function AuthApp(signInButton, signUpButton, email, password){
	
	this.initFireBase();

	this.signInButton = signInButton;
	this.signUpButton = signUpButton;
	this.email = email;
	this.password = password;
	this.firstTime = true;	

	if (this.signInButton != null && this.signUpButton != null){
		this.signInButton.addEventListener ('click', this.signIn.bind(this));
		this.signUpButton.addEventListener ('click', this.signUp.bind(this));
	}
}

AuthApp.prototype.initFireBase = function(){
	this.auth = firebase.auth();
	this.database = firebase.database();
	
	this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

AuthApp.prototype.signUp = function (){
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
}

AuthApp.prototype.signIn = function (event){
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