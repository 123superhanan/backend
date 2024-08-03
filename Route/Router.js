import express from 'express';
import {UserData, postData, countryname} from "./FakeApi.js"
import { SignUp } from '../Controller/userController.js';

const router = express.Router();

app.get('/sign_up', SignUp);
   
  app.get('/User', (req, res) => {
      res.send(UserData);
    })
   app.get('/post', (req, res) => {
      res.send(postData);
    })

export default router