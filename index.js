var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
 res.send('hello');
=======
 res.send('Welcome to Fortune Cloud Tchnologies!!!!');
>>>>>>> 3e0f59702d0a335fe1b2e12dfd792974e32b3df8
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
