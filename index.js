import express from "express";
import connection from "./database/db.js";
import Router from "./Route/Router.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const port = process.env.PORT || 4000;




app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization' 

}));

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use("/", Router);
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

connection();
