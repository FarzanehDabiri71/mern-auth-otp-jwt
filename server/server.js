import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/conn.js";
import mongoose from "mongoose";
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by"); //less hackers know about our stack

const port = 8000;

// HTTP GET REQUEST
app.get("/", (req, res) => {
  // res.setHeader("Content-Type", "application/json");
  res.status(201).json("Home GET Request");
});

// start server only have valid connection

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log("connot Connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid database conneciton...!");
  });
