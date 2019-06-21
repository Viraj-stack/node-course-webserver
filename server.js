const express = require('express');
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
var app = express();
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));
app.get('/',(req,res) => {
  res.render('home.hbs', {
    pagetitle: "Home Page",
    pageBody: "Welcome to the home page",
    pageFooter: new Date().getFullYear()
  })
});
app.get('/bad',(req,res) => {
  res.send({
    msg: 'Error sending the message'
  });
});
app.listen(3000);