const express = require('express');
const app = express();
const cors = require('cors');

const todoRouter = require('./routers/todoRouter');

const globalErrorHandler = require('./middlewares/globalErrorHandler');

const AppError = require('./utils/appError');

app.use(express.json());

// $ CORS
app.use(cors());

//  Body Parser  => reading data from body into req.body protect from scraping etc
app.use(express.json({ limit: '10kb' }));

// testing middleware
app.use((req, res, next) => {
  console.log('this is a middleware');
  next();
});

// routes
app.use('/api/todos', todoRouter);
// handling all (get,post,update,delete.....) unhandled routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

// error handling middleware
app.use(globalErrorHandler);

module.exports = app;
