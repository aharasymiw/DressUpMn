var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./server/routes/index');
var clients = require('./server/routes/clients');
var form = require('./server/routes/form');
var adminCalendar = require('./server/routes/calendar');
var moment = require('moment');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/clients', clients);
//The form route is currently set up as a direct route. Needs to be refactored
//Into an Angular route.
app.use('/api/form', form);
app.use('/admin/calendar', adminCalendar);
app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
/*if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    .sendFile('error', {
      message: err.message,
      error: err
    });
  });
}*/

// production error handler
// no stacktraces leaked to user
/*app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  .sendFile('error', {
    message: err.message,
    error: {}
  });
});*/

module.exports = app;
