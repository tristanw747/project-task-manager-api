import express from "express";
import mongoose from "mongoose";
import {router as tasks} from "./routes/tasks.js";
import {connectDB} from './db/connect.js';
// import dotenv, { config } from "dotenv";
// import dotenv from "dotenv";
import dotenv from 'dotenv';
dotenv.config();


const app = express();



// middleware
app.use(express.json())
//routes
app.get('/hello', (req,res)=>{
  res.send("Task Manager App")
})

app.get('/', (req,res)=>{
  res.send("Home Page")
})

app.use('/api/v1/tasks', tasks)

const port = 3000;

const start = async () =>{
  try{
await connectDB(process.env.MONGO_URI);
app.listen(port, console.log(`server is listening on port ${port}...`));

  } catch (error){
console.log(error)
  }
}

start()