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





