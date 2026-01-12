const express = require('express');
const { default: userAuth } = require('../middleware/userAuth.js');
const { getuserData, getUserData } = require('../controller/userController.js');
const userRouter = express.Router();

userRouter.get('/data', userAuth, getUserData );

module.exports = userRouter;
