import mongoose from 'mongoose';
import validator from 'validator';

// import { Schema } from 'mongoose';

// create the user schema
const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      trim: true,
   },
   email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
         if (!validator.isEmail(value)) {
            throw new Error("Email is invalid");
         }
      }
   }
});

// create the user model
const User = mongoose.model('User', userSchema);

// export the user model
export { User };
