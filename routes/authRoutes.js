import express from 'express';
import { isAccountVerified, login, logout, register, resetPassword, sendResetOtp, sendVerifyOtp, verifyEmail } from '../controller/authController.js';
import userAuth from '../middleware/userAuth.js';

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/send-verify-otp', userAuth, sendVerifyOtp);
authRouter.post('/verify-account', userAuth, verifyEmail);
authRouter.get('/is-auth', userAuth, isAccountVerified);
authRouter.post('/send-reset-otp', sendResetOtp);
authRouter.post('/reset-password', resetPassword);

export default authRouter;




/*const express = require('express');
const { register, login, logout, sendVerifyOtp, verifyEmail, isAccountVerified, sendResetOtp, resetPassword } = require('../controller/authController');
const { default: userAuth } = require('../middleware/userAuth');
//const { default: userAuth } = require('../middleware/userAuth');
const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/send-verify-otp', userAuth, sendVerifyOtp);
authRouter.post('/verify-account', userAuth, verifyEmail);
authRouter.get('/is-auth', userAuth, isAccountVerified);
authRouter.post('/send-reset-otp', sendResetOtp);
authRouter.post('/reset-password', resetPassword);

module.exports = authRouter;*/