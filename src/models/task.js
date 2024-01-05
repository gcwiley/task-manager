import mongoose from 'mongoose';

// create the task schema
const taskSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      trim: true,
   },
   createdDate: Date,
   completedDate: Date,
   completed: Boolean,
});

// create the task model
const Task = mongoose.model('Task', taskSchema);

// export the task model
export { Task };
