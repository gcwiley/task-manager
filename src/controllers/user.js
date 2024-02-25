// import the user model
import { User } from '../models/user.js';

// function to create a new user - SIGN UP
export const signUpUser = async (req, res) => {
   const user = new User(req.body);

   try {
      // saves new user to database
      await user.save();
      // generate token for the saved user
      const token = await user.generateAuthToken();
      res.status(201).send({ user, token });
   } catch (error) {
      res.status(400).send(error);
   }
};

// function to signin a user - SIGN IN
export const signInUser = async (req, res) => {
   try {
      // validating the credentials that are provided
      const user = await User.findByCredentials(req.body.email, req.body.password);
      // generate a token for a specific user
      const token = await user.generateAuthToken();
      // sends back user and token to requester
      // when we pass our objects to res.send() they are getting stringified
      res.send({ user, token });
   } catch (error) {
      res.status(400).send(error);
   }
};

// function to sign out a user - SIGN OUT
export const signOutUser = async (req, res) => {
   try {
      // removing given item from tokens array by using array filter method
      req.user.tokens = req.user.tokens.filter((token) => {
         return token.token !== req.token;
      });

      // save to database
      await req.user.save();

      res.send();
   } catch (error) {
      res.status(500).send(error);
   }
};

// function to sign out a user from all sessions - SIGN OUT ALL
export const signOutAll = async (req, res) => {
   try {
      // wiping the tokens array - set to empty array
      req.user.tokens = [];
      // save to database
      await req.user.save();

      res.send();
   } catch (error) {
      res.status(500).send(error);
   }
};

// function that allows user to get profile when they are authenticated - GET PROFILE
export const getProfile = async (req, res) => {
   // send back user profile
   res.send(req.user);
};

// function to update an individual user by ID - UPDATE USER
export const updateUser = async (req, res) => {
   // error handling - making sure the user is using the operation correctly
   const updates = Object.keys(req.body);
   const allowedUpdates = ['name', 'email', 'password', 'age'];
   const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

   if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' });
   }

   try {
      updates.forEach((update) => (req.user[update] = req.body[update]));
      await req.user.save();
      res.send(req.user);
   } catch (error) {
      // if something goes wrong - like a validation issue
      res.status(400).send(error);
   }
};

// function to allow signed in user to delete thier own user profile - REMOVE ACCOUNT
export const deleteUser = async (req, res) => {
   try {
      // removing the user who is authenicated
      await req.user.remove();

      res.send(req.user);
   } catch (error) {
      res.status(500).send(error);
   }
};
