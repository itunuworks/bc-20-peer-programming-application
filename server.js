var express = require("express");
var app = express();
var router = express.Router();
var viewsPath = __dirname + '/pages/';

router.use(function(req, res, next){
  console.log('/' + req.method);
  next();
})

router.get('/', function(req, res){
  res.sendFile( viewsPath + 'login.html');
})

router.get('/signup', function(req, res){
  res.sendFile(viewsPath + 'signUp.html');
})

router.get('/logout', function(req, res){
  res.sendFile(viewsPath + 'login.html');
})

router.get('/landingpage', function(req, res){
  
  res.sendFile(viewsPath + 'main.html');
})

app.use('/', router);

app.use(express.static('apps'));
app.use(express.static('pages'));
app.use(express.static('styles'));

app.use('*', function(req, res){
  res.sendFile(viewsPath + '404.html');
})

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
  console.log("Listening for connections to port 3000");
})