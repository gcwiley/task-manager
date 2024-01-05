import mongoose from 'mongoose';

// create the user schema
const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      trim: true,
   },
});

// create the user model
const User = mongoose.model('User', userSchema);

// export the user model
export { User };
