import express from 'express';
import {UserData, postData, countryname} from "./FakeApi.js"


const router = express.Router();

app.get('/', (req, res) => {
    res.send(countryname);
  })
   
  app.get('/User', (req, res) => {
      res.send(UserData);
    })
   app.get('/post', (req, res) => {
      res.send(postData);
    })

export default router