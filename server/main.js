var express = require('express');
var app = new express();
var rootPath = require('path').normalize(__dirname + '/../');
var bodyParser = require('body-parser');
var React = require('react/addons');
var GroceryItem = require('./models/GroceryItem.js');

require('babel/register');
require('./database.js');

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: false}))
  .use(express.static(rootPath + '.tmp'))
  .use('/bower_components/skeleton/css', express.static(rootPath + 'bower_components/skeleton/css'))
  .listen(7777);

app
  .get('/', function(req, res) {

    //res.render('./../app/index.ejs', {});

    var application = React.createFactory(require('./../app/components/GroceryItemList.jsx'));

    GroceryItem.find(function(error, doc) {

      var generated = React.renderToString(application({
        items: doc
      }));

      res.render('./../app/index.ejs', {
        reactOutput: generated
      });

    });
  });

require('./routes/items.js')(app);
