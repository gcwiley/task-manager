import mongoose from 'mongoose';
import { Schema } from 'mongoose';

// create the task schema
const taskSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         trim: true,
      },
      description: {
         type: String,
         required: true,
         trim: true,
      },
      status: {
         type: String,
         enum: ['pending', 'in progress', 'completed'],
         default: 'pending',
      },
      owner: {
         // data stored in owner is going to be a ObjectID
         type: Schema.Types.ObjectId,
         // you must provide an owner for the task
         required: true,
         // ref is short for reference to another model
         ref: 'User',
      },
   },
   {
      timestamps: true,
   }
);

// create the task model
const Task = mongoose.model('Task', taskSchema);

// export the task model
export { Task };
