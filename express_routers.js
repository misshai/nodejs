var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var dishRouter = require('./routers/dishRouter');
var leaderRouter = require('./routers/leaderRouter');
var promoRouter = require('./routers/promoRouter');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use('/dishes',dishRouter());
app.use('/leadership',leaderRouter());
app.use('/promotions',promoRouter());

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
        });