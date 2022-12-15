import { Task } from "../models/task.js"

export const getAllTasks = (req, res) => {
  res.send('get all tasks')
}

export let createTask = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
}

export const getTask = (req, res) => {
  res.json({ id: req.params.id })
}

export const updateTask = (req, res) => {
  res.send('update task')
}

export const deleteTask = (req, res) => {
  res.send('delete task')
}