import dotenv from 'dotenv';

dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT || 3001;




/*require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 3001;

module.exports = {
    MONGODB_URI,
    PORT
}*/
