import express from "express";
import {router as tasks} from "./routes/tasks.js";
// const tasks = require ('./routes/tasks')
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

app.get('/api/v1/tasks', tasks)

const port = 3000;
app.listen(port, console.log(`server is listening on port ${port}...`))