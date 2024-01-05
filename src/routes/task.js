import express from 'express';

// define a new router
const router = new express.Router();

// import the task controllers
import { newTask } from '../controllers/task.js';

// route handler to create a new task - NEW TASK
router.post('/api/projects', newTask);

// export the router
export { router as taskRouter };
