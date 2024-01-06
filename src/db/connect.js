import process from 'process';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

// load the environmental variables
dotenv.config({ path: '/home/user/myapp/.env', debug: true });

// get the connection string from the .env file
const uri = process.env.COSMOS_CONNECTION_STRING;

// get the name of the database from the .env file
const dbName = process.env.DATABASE_NAME;

async function connect() {
   try {
      // opens mongoose's default connection to mongodb
      await mongoose.connect(uri, { dbName: dbName });
      console.log(`Successfully connected to the database - ${dbName}`);
   } catch (error) {
      console.error(`Unable to connect to the ${dbName} database: ${error}`);
   }
}

// export the function
export { connect };
