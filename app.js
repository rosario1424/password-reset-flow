import express from 'express';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import logger from './utils/logger.js';

import cookieParser from 'cookie-parser';

import cors from 'cors';

const app = express();

app.use(logger);

const allowedOrigins = [
  'http://localhost:5173',
  'https://password-reset-fl.netlify.app'
];

app.use(express.json());
app.use(cookieParser());


app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.some(o => origin.startsWith(o))) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
  
/*app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow Postman
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true*/
}));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);

export default app;




/*const express = require('express');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRoutes');
const logger = require('./utils/logger');
const cors = require('cors');

const app = express();

app.use(logger);

const allowedOrigins = [
  'http://localhost:5173',
  'https://password-reset-fl.netlify.app'
];

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow Postman
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
//app.use('/api/v1/auth', userRouter);

module.exports = app;*/





/*const express = require('express');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRoutes');
const logger = require('./utils/logger');
const cors = require('cors');

const app = express();

app.use(logger);

const allowedOrigins = ['http://localhost:5173/']

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: 'https://password-reset-fl.netlify.app',
  credentials: true
}));
//app.use(cors({origin: allowedOrigins, credentials: true}))
//app.use(cors());
//app.use(cors({Credentials: true}));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/auth', userRouter);

module.exports = app;*/



/*const express = require('express');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRoutes');
const logger = require('./utils/logger');
const cors = require('cors');

const app = express();

// Logger middleware
app.use(logger);

// Parse JSON & cookies
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const allowedOrigins = [
  'http://localhost:5173',
  'https://password-reset-fl.netlify.app'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter); // changed base path

module.exports = app;*/