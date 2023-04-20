const { addTodo, getAllTodo, toggleTodoDone,updateTodo,deleteTodo } = require('../controllers/todo-controller.js');
const express = require('express');
const Router = express.Router();

Router.post("/todos", addTodo)
Router.get("/todos", getAllTodo);
Router.get("/todos/:id", toggleTodoDone);
Router.put('/todos/:id',updateTodo);
Router.delete('/todos/:id',deleteTodo);

module.exports = Router;