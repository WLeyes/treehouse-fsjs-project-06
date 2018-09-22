const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

// static resources set to static path
app.use('/static', express.static('public'));

// Set render engine
app.set('view engine', 'pug');

// path to routes
app.use(mainRoutes);
app.use('/projects', projectRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error(
    'I am sorry our worker moths could not locate the page you were looking for!'
    );
  err.status = 404;
  next(err);
});

// Error handler
app.use( (err, req, res, next) => {
  res.locals.error = err
  res.status(err.status);
  res.render('error');
  next(err);
})

// export app to use inside bin
module.exports = app;