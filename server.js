var express = require('express'); //used to create the web server
var morgan = require('morgan'); //help output logs of our sevrer
var path = require('path');

// lines 8,12,16 are used to handle specific URL's

var app = express();
app.use(morgan('combined'));

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

var article_one = {
    title: "Article One : Sameer",
    heading: "Article One",
    date: "Feb 9",
    content: `<p>
                Content in here is a part of my first Article.This is done using online stuff.This page is additional to the homepage.
            </p>
            <p>
                Content in here is a part of my first Article.This is done using online stuff.This page is additional to the homepage.
            </p>
            <p>
                Content in here is a part of my first Article.This is done using online stuff.This page is additional to the homepage.
            </p>`
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var content = data.content;
    var heading = data.heading;
    
    var htmlTemplate =
       ` <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div>
                <a href="/">HOME</a>
            </div>
            <br/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </body>
    </html>`
    ;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/article_one', function (req, res) {
   res.send(createTemplate(article_one));
});

app.get('/article_two', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article_two.html'));
});

app.get('/article_three', function (req, res) {
    res.send("article three is served here");
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
