import express from 'express';

// import the auth function
import { auth } from '../middleware/auth.js';

// define a new router
const router = new express.Router();

// import user controller functions
import {
   signUpUser,
   signInUser,
   signOutUser,
   signOutAll,
   getProfile,
   updateUser,
   deleteUser,
} from '../controllers/user.js';

// route handler to create a new user - SIGN UP
router.post('/users', signUpUser);

// route handler to sign in user - SIGN IN
router.post('/users/signin', signInUser);

// route handler to allow user to sign out - SIGN OUT
router.post('/users/signout', auth, signOutUser);

// route handler to allow user to sign out of ALL sessions - SIGN OUT ALL
router.post('/users/signoutAll', auth, signOutAll);

// router handler that allows user to get profile when they are authenicated
router.get('/users/me', auth, getProfile);

// router handler to update a individual user by ID
router.patch('/users/me', auth, updateUser);

// route handler to allow signed in user to delete thier own user profile - REMOVE ACCOUNT
router.delete('/users/me', auth, deleteUser);

// export the user router
export { router as userRouter };
