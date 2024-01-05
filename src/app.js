import path from 'node:path';
import process from 'process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from 'express';
import logger from 'morgan';

// import the routers
import { taskRouter } from './routes/task.js';

// initialize the database connection
import './db/connect.js';

// create an express application
const app = express();

// set up the port information
const port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// automatically parse incoming JSON to an object so we can access it in our request handlers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// create a logger middleware
app.use(logger('dev'));

// register the routers
app.use(taskRouter);

// listen for connections
app.listen(port, () => {
   console.log(`Successfully started server running on port ${port}`);
});
