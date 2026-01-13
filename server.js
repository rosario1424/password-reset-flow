import mongoose from 'mongoose';
import { MONGODB_URI, PORT } from './utils/config.js';
import app from './app.js';

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');

    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    server.on('error', (err) => {
      console.error('Server error:', err.message);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });





/*const mongoose = require('mongoose');
const { MONGODB_URI, PORT } = require('./utils/config');
const app = require('./app');

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('Connect to MongoDB');

        app
           .listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
           })
           .on('error', (err) => {
            console.error('Server error:', err.message);
           });

    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error.message);
    }) */