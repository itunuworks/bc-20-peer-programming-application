(function initAuth(){
	console.log('I just ran 1st');
	var config = {
  	apiKey: "AIzaSyBDV1xH1vjy5e828BKvsBhFwDhbDiyyFEk",
	  authDomain: "peer-programming-application.firebaseapp.com",
	  databaseURL: "https://peer-programming-application.firebaseio.com",
	  storageBucket: "peer-programming-application.appspot.com",
	  messagingSenderId: "1058474997451"
  };
  firebase.initializeApp(config);
  document.getElementById('signInButton').addEventListener('click', signInWithGoogle);
})();

function signIn(){
	console.log('Sign In normally');
	var auth = firebase.auth();
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	auth.signInWithEmailAndPassword(email, password).catch(function(error){
		console.log(error);
	})
}

function signInWithGoogle(){
	console.log('logIn with Google');
	var auth = firebase.auth();
	var provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
}
