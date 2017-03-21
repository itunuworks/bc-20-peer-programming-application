'use strict';

(function init() {
  // Initialize Firebase.
  var config = {
  	apiKey: "AIzaSyBDV1xH1vjy5e828BKvsBhFwDhbDiyyFEk",
	  authDomain: "peer-programming-application.firebaseapp.com",
	  databaseURL: "https://peer-programming-application.firebaseio.com",
	  storageBucket: "peer-programming-application.appspot.com",
	  messagingSenderId: "1058474997451"
  };
  firebase.initializeApp(config);

  // Get Firebase Database reference.
  var firepadRef = getDataRef();

  // Create CodeMirror (with line numbers and the JavaScript mode).
  var codeMirror = CodeMirror(document.getElementById('editor'), {
	  lineNumbers: true,
	  mode: 'javascript',
	});

  // Create Firepad.
  var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
    defaultText: '// JavaScript Editing with Firepad!\nfunction go() {\n  var message = "Hello, world.";\n  console.log(message);\n}'
  });
})();


// Helper to get hash from end of URL or generate a random one.
function getDataRef(){
  var ref = firebase.database().ref();
  var hash = window.location.hash.replace(/#/g, '');
  if (hash) {
    ref = ref.child(hash);
  } else {
    ref = ref.push(); // generate unique location.
    window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
  }
  if (typeof console !== 'undefined') {
    console.log('Firebase data: ', ref.toString());
  }
  return ref;
}