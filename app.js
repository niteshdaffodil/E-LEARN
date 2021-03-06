var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var config = require('./config/config')
var routes = require('./routes/index');
var users = require('./routes/users');
var modules = require('./routes/modules');
var lessons = require('./routes/lessons');
var handler = require('./helper/response.js');

var app = express();
mongoose.connect(config.database.address);
var db = mongoose.connection;
db.on('error', function(error){
  console.log("database not connected ",error);
});
db.once('open', function() {
  console.log("Database connected");
});
// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/modules', modules);
app.use('/lessons', lessons);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.json(handler.handleError(404, "Not Found"));
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.json(handler.handleError(404, "Not Found"));
});


module.exports = app;
