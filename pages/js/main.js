'use strict';

var MainAuthApp = AuthApp;
var myAuthApp;

MainAuthApp.prototype = Object.create(AuthApp.prototype);

MainAuthApp.prototype.onAuthStateChanged = function(user){
	console.log(user);
	console.log("onAuthStateChanged is executed");

	if (user){
		console.log(user.email + ' is signed in.');
		window.alert('Signed in ' + user.email);
		this.loadIdeas();
	}
	else{
		console.log('No user signed in');
		window.location.href = "/";
	}
}

MainAuthApp.prototype.setUp = function(logout, editor){
	console.log(logout);
	this.logOutButton = logout;
	this.editorField = editor;
	this.logOutButton.addEventListener ('click', this.signOut.bind(this));
}

function initAuthApp(){
	return new MainAuthApp();
}

function initMain() {

	myAuthApp = initAuthApp();
  myAuthApp.setUp(
  	document.getElementById('logout'), 
  	document.getElementById('editor'));

  // Get Firebase Database reference.
  var firepadRef = getDataRef();

  // Create CodeMirror (with line numbers and the JavaScript mode).
  var codeMirror = CodeMirror(myAuthApp.editorField, {
	  lineNumbers: true,
	  mode: 'javascript',
	});

  // Create Firepad.
  var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
    defaultText: '// JavaScript Editing with Firepad!\nfunction go() {\n  var message = "Hello, world.";\n  console.log(message);\n}'
  });
}


// Helper to get hash from end of URL or generate a random one.
function getDataRef(){
  var ref = myAuthApp.database.ref();
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
