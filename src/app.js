import process from 'process';
import express from 'express';
import logger from 'morgan';

// import the routers
import { taskRouter } from './routes/task.js';

// initialize the database connection function
import { connect } from './db/connect.js';

// connect to the mongo database
connect();

// create an express application
const app = express();

// set up the port information
const port = process.env.PORT || 3000;

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
