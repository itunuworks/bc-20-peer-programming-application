'use strict';

(function init() {
	
	var MainAuthApp = AuthApp;
	var myAuthApp;

	myAuthApp = initAuthApp();
  myAuthApp.setUp(document.getElementById('logout'), 
  	document.getElementById('save'), 
  	document.getElementById('title'), 
  	document.getElementById('description'), 
  	document.getElementById('close'), 
  	document.getElementById('ideabox'));

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
  var ref = myAuthApp.database;
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

MainAuthApp.prototype.setUp = function(logout, save, title, description, close, ideaBox){
	console.log(logout);
	this.logOutButton = logout;
	this.saveIdeaButton = save;
	this.titleTextBox = title;
	this.descriptionTextBox = description;
	this.closeButton = close;
	this.ideaBoxElement = ideaBox;

	this.logOutButton.addEventListener ('click', this.signOut.bind(this));
	this.saveIdeaButton.addEventListener ('click', this.saveIdea.bind(this));
}

function initAuthApp(){
	return new MainAuthApp();
}