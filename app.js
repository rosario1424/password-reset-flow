const express = require('express');
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
  origin: 'http://localhost:5173',
  credentials: true
}));
//app.use(cors({origin: allowedOrigins, credentials: true}))
//app.use(cors());
//app.use(cors({Credentials: true}));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/auth', userRouter);

module.exports = app;