import express from "express";
import mongoose from "mongoose";
import {router as tasks} from "./routes/tasks.js";
import {connectDB} from './db/connect.js';
// import dotenv, { config } from "dotenv";
// import dotenv from "dotenv";
import dotenv from 'dotenv';
dotenv.config();
import { notFound } from "./middleware/not-found.js";
import { errorHandlerMiddleware } from "./middleware/error-handler.js";




const app = express();


  
// middleware
app.use(express.static('./public'))
app.use(express.json())
//routes

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const start = async () =>{
  try{
await connectDB(process.env.MONGO_URI);
app.listen(port, console.log(`server is listening on port ${port}...`));

  } catch (error){
console.log(error)
  }
}

start()