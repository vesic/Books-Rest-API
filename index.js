var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://root:root@ds041603.mongolab.com:41603/books-db');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books', bookRouter); 

app.get('/', function(req, res){
    res.send('REST Web Services ' + req.ip);
});

app.listen(port, function(){
    console.log('App is running on port: ' + port);
});

module.exports = app;