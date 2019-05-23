const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');
const mysql = require('mysql');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static(__dirname + 'public'));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/features', (req, res) => {
  res.render('features');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/resources/boostrap.min.js', function (req, res) {
    res.sendFile('./public/js/bootstrap.min.js', { root: __dirname });
});

app.get('/resources/404.css', function (req, res) {
    res.sendFile('./public/css/404.css', { root: __dirname });
})

app.get('/resources/features.css', function (req, res) {
  res.sendFile('./public/css/features.css', { root: __dirname });
})

app.get('/resources/index.css', function (req, res) {
  res.sendFile('./public/css/index.css', { root: __dirname });
})

app.get('/resources/login.css', function (req, res) {
  res.sendFile('./public/css/login.css', { root: __dirname });
})

app.get('/resources/signup.css', function (req, res) {
  res.sendFile('./public/css/signup.css', { root: __dirname });
})

app.listen(PORT, () => {
    console.log("Webserver docked and running on port " + PORT);
});

app.get('/api/:method/:parameters', function(req, res){
    var method = req.params.method;
    var parameters = req.params.parameters;
  
    // "/api/exampleMethod/firstName=john&lastName=smith&age=15"
    var params = parameters.split("&").map(function(key){
     return key.split("=", 2); 
    }); //params[0][0];
  
    switch(method) {
      case "getTasks":
        getTasks();
        break;
      default:
        res.render(404);
    }
  
    function getTasks() {
      return;
    }
  
  });

  app.get('*', (req, res) => {
    res.render('404');
});