import express from 'express';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import logger from './utils/logger.js';
import cors from 'cors';

const app = express();

app.use(logger);
app.use(express.json());

// ✅ Clean Bearer-token CORS config
app.use(cors({
  origin:"https://password-reset-fl.netlify.app",

  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  
}));

app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);

export default app;


