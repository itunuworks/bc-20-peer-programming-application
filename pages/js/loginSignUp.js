'use strict';

function initLoginSignUp(isSignIn){
  var myAuthApp;
  var buttonName = 'signUpButton';

  if (isSignIn){
    buttonName = 'signInButton';
  }

  myAuthApp = new AuthApp(
    document.getElementById(buttonName),
    document.getElementById('email'), 
    document.getElementById('password'),
    isSignIn,
    document.getElementById('password2')
  );
}