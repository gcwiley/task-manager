import { Task } from '../models/task.js';

// function to create a new task - NEW TASK
export const newTask = async (req, res, next) => {
   const taskName = req.body.taskName;
   const createDate = Date.now();

   // create a new task
   const newTask = new Task({
      taskName: taskName,
      createDate: createDate,
   });

   try {
      await newTask.save();
      res.status(201).send(taskName);
   } catch (error) {}
};

// function to complete task
export const completeTask = async (req, res, next) => {
   const taskId = req.body._id;

   try {
      const updatedTask = await Task.findByIdAndUpdate(taskId, { completed: true, completedDate: Date.now() });
   } catch (error) {
      res.status(400).send(error);
   }
};

// function to delete a task - DELETE TASK
export const deleteTaskById = async (req, res) => {
   try {
      const delatedTask = await Task.findByIdAndDelete({ _id: req.params.id });

      // if no task if found
      if (!delatedTask) {
         return res.status(404).send();
      }

      res.send(delatedTask);
   } catch (error) {
      res.status(500).send();
   }
};
