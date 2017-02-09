var express = require('express'); //used to create the web server
var morgan = require('morgan'); //help output logs of our sevrer
var path = require('path');

// lines 8,12,16 are used to handle specific URL's

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article_one', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article_one.html'));
});

app.get('/article_two', function (req, res) {
    res.send("article two is served here");
});

app.get('/article_three', function (req, res) {
    res.send("article three is served here");
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
