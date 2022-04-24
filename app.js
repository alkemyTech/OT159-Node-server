const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
require('dotenv').config()

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const testimonialsRouter = require('./routes/testimonial');
const categoryRouter = require('./routes/categories');
const newsRouter = require('./routes/news');
const organizationRouter = require('./routes/organizationRoutes');
const authRouter = require('./routes/auth');
const membersRouter = require('./routes/members');
const activitiesRouter = require('./routes/activities')
const commentRouter = require('./routes/comments')
const slidesRouter = require('./routes/slides')
const contactsRouter = require('./routes/contacts')
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerSpec = require('./swagger/config')

const app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

app.use('/users', usersRouter); 
app.use('/categories',categoryRouter); 
app.use('/news', newsRouter);
app.use('/organization', organizationRouter);
app.use('/auth', authRouter)
app.use('/testimonials', testimonialsRouter);
app.use('/activities', activitiesRouter)
app.use('/contacts', contactsRouter);
app.use('/comments', commentRouter)
app.use('/members', membersRouter)
app.use('/slides', slidesRouter);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

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