import express from 'express';
import userAuth from '../middleware/userAuth.js';
import { getUserData } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/data', userAuth, getUserData);

export default userRouter;




/*const express = require('express');
const { default: userAuth } = require('../middleware/userAuth.js');
const { getuserData, getUserData } = require('../controller/userController.js');
const userRouter = express.Router();

userRouter.get('/data', userAuth, getUserData );

module.exports = userRouter;*/
