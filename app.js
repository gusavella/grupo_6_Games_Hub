let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
let logger = require('morgan');
const expressSession = require("express-session");

let indexRouter = require('./src/routes/index');
let cartRouter = require('./src/routes/cart');
let loginRouter = require('./src/routes/login');
let registerRouter = require('./src/routes/register');
let productRouter = require('./src/routes/product');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));
app.use(methodOverride('_method')); 
app.use(expressSession({secret: "secret",resave: false,saveUninitialized: false}));

app.use('/', indexRouter);
app.use('/cart', cartRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/product', productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).render('not-found')
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
