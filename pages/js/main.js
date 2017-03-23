'use strict';

var MainAuthApp = AuthApp;
var myAuthApp;
var codeMirror;

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

MainAuthApp.prototype.setUp = function(logout, editor, newSession, saveSession, deleteSession){
	console.log(logout);
	this.logOutButton = logout;
	this.editorField = editor;
  this.newSessionButton = newSession;
  this.saveSessionButton = saveSession;
  this.deleteSessionButton = deleteSession;

	this.newSessionButton.addEventListener ('click', this.newSession.bind(this));
  this.saveSessionButton.addEventListener ('click', this.saveSession.bind(this));
  this.deleteSessionButton.addEventListener ('click', this.deleteSession.bind(this));
  this.logOutButton.addEventListener ('click', this.signOut.bind(this));
}

MainAuthApp.prototype.newSession = function(){
  console.log('new session just got clicked.');
  setupFirepad(true);
  // var ref = ref.push(); // generate unique location.
  // window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
  // var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
  //   defaultText: '// JavaScript Editing with Firepad!\nfunction go() {\n  var message = "Hello, world.";\n  console.log(message);\n}'
  // });
};

MainAuthApp.prototype.saveSession = function(){
  console.log('saveSession just got clicked.');
};

MainAuthApp.prototype.deleteSession = function(){
  console.log('delete session just got clicked.');
};

function initAuthApp(){
	return new MainAuthApp();
}

function initMain() {

	myAuthApp = initAuthApp();
  myAuthApp.setUp(
  	document.getElementById('logout'), 
  	document.getElementById('editor'),
    document.getElementById('new'),
    document.getElementById('save'),
    document.getElementById('delete'));

  // Create CodeMirror (with line numbers and the JavaScript mode).
  codeMirror = CodeMirror(myAuthApp.editorField, {
	  lineNumbers: true,
	  mode: 'javascript',
	});

  setupFirepad(false);
}

function setupFirepad(isNewSession){
  // Get Firebase Database reference.
  var firepadRef = getDataRef(isNewSession);

  // Create Firepad.
  if (firepadRef !== null){
    var defaultCode = '// JavaScript Editing with Firepad!\nfunction go() {\n  var message = "Hello, world.";\n  console.log(message);\n}'
    codeMirror.setValue('');
    var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
      defaultText: defaultCode
    });
  }
}

// Helper to get hash from end of URL or return a null one.
function getDataRef(isNewSession){
  var ref = myAuthApp.database.ref();
  var hash = window.location.hash.replace(/#/g, '');

  if (hash && !isNewSession) {
    ref = ref.child(hash);
  } 
  else if (!isNewSession) {
    ref = null; // return null when it is an empty session.
  } 
  else{
    ref = ref.push(); // generate unique location.
    if (hash){
      window.location.hash = '#' + ref.key;
    }
    else{
      window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
    }
  }
  return ref;
}
