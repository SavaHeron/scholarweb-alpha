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

app.get('/resources/boostrap.min.js', function (req, res) {
    res.sendFile('./public/js/bootstrap.min.js', { root: __dirname });
});

app.get('/resources/index.css', function (req, res) {
    res.sendFile('./public/css/index.jss', { root: __dirname });
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

  app.get('*', function (req, resp) {
    res.render('404');
});
