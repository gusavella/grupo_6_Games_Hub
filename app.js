let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
let logger = require('morgan');
const expressSession = require("express-session");

let indexRouter = require('./src/routes/index');
let productRouter = require('./src/routes/productRouter');
let userRouter = require('./src/routes/userRouter');
let roleRouter = require('./src/routes/roleRouter');
let consoleRouter = require('./src/routes/consoleRouter');
let sectionRouter = require('./src/routes/sectionRouter');
let categoryRouter = require('./src/routes/categoryRouter');
let gameRouter = require('./src/routes/gameRouter');
let productConsoleRouter = require('./src/routes/productConsoleRouter');
let orderRouter = require('./src/routes/orderRouter');
const apiUsersRouter = require('./src/routes/apiUsersRouter');
const apiProductsRouter = require('./src/routes/apiProductsRouter');





let userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware')

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
app.use(userLoggedMiddleware);

app.use('/', indexRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/roles', roleRouter);
app.use('/consoles', consoleRouter);
app.use('/sections', sectionRouter);
app.use('/categories', categoryRouter);
app.use('/games', gameRouter);
app.use('/productConsoles', productConsoleRouter);
app.use('/orders', orderRouter);

// api

app.use('/api/users', apiUsersRouter)
app.use('/api/products', apiProductsRouter)


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
