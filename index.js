import express from "express";
import articles from "./data.js";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());
// Simple route

app.use((req, res, next) => {
  console.log("Hello, I am middleware!");
  req.name = "hanan";
  next(); 
});

app.use((req, res, next) => {
  console.log("Hello, I am middleware 2",req.name);
  next();
})
app.get("/", (req, res) => {
  console.log("i am a tough kid", req.name);
  res.send("Welcome to the Articles API");
});

// app.use((req, res, next) => {
//   console.log("Hello, I am middleware 2",req.name);
//   return res.end("karma");
// })
app.get("/articles", (req, res) => {
  res.json(articles);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

