var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDatabase = require('./config/connectDb')
// const auth = require('./authentication/basicAuth')

const sessionBaseAuth = require('./authentication/sessionBaseAuth')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const promotionRoute = require('./routes/promtionRoutes')
const leaderRoutes = require('./routes/leaderRoutes')

var app = express();


// adding dot env to our project
require('dotenv').config({path : "./config/config.env"})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('12345-67890-09876-54321'));
app.use(express.static(path.join(__dirname, 'public')));

// Connecting To DAtaBase
connectDatabase()


// app.use(auth)
app.use(sessionBaseAuth)
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/leader', leaderRoutes);
app.use('/promo', promotionRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
