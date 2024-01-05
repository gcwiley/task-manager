import process from 'process';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

// load the environmental variables
dotenv.config();

// get the connection string from the .env file
const connection_string = process.env.DATABASE_URL;

// Opens Mongoose's default connection to MongoDB
mongoose
   .connect(connection_string)
   .then(() => {
      console.log('Successfully connected to the database');
   })
   .catch((error) => {
      console.log('Unable to connect to the database', error);
   });
