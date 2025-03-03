
import express from "express";
//import cors from "cors";
const app = express();
const port = process.env.PORT || 4000;
// import Data from "./blogs.json" //assert {type:"json"};
app.use(express.json());

 app.get('/', (req, res) => {
  res.send("Welcome to the Fake API!")
 })

// app.get('/users', (req, res) => {
//  res.json(Data.users);
// })

  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

