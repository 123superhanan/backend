import express from 'express';
import {UserData, postData} from "../FakeApi.js";
import { SignUp } from '../Controller/userController.js';

const router = express.Router();

router.post('/signUp', SignUp);
   
router.get('/User', (req, res) => {
  try {
    res.json(UserData); // Send data as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
    })
    router.get('/post', (req, res) => {
      try {
        res.json(postData);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch post data' });
      }
    })

export default router