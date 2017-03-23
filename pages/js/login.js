'use strict';

function initLogin(){
	var myAuthApp;

	myAuthApp = initAuthApp(
			document.getElementById('signInButton'),
			document.getElementById('email'), 
			document.getElementById('password')
		);
}

// function signIn(){
// 	console.log('Sign In normally');
// 	var auth = firebase.auth();
// 	var email = document.getElementById('email').value;
// 	var password = document.getElementById('password').value;
// 	auth.signInWithEmailAndPassword(email, password).catch(function(error){
// 		console.log(error);
// 	})
// }

// function signInWithGoogle(){
// 	console.log('logIn with Google');
// 	var auth = firebase.auth();
// 	var provider = new firebase.auth.GoogleAuthProvider();
//   auth.signInWithPopup(provider);
// }

function initAuthApp(signin, email, password){
	return new AuthApp(signin, email, password, true);
}