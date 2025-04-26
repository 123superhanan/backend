import express from "express";
import articles from "./data.js";

const app = express();
const port = 5000;

// Middleware (fixed req, res, next)
app.use((req, res, next) => {
  console.log("Hello, I am middleware!");
  next(); // continue to the next route
});

// Simple route
app.get("/", (req, res) => {
  res.send("Welcome to the Articles API");
});

// Articles route
app.get("/articles", (req, res) => {
  res.json(articles);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

