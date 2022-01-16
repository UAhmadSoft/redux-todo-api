const express = require('express');

const todoController = require('../controllers/TodoController');

const router = express.Router();

router
  .route('/')
  .get(todoController.getAllTodos)
  .post(todoController.addNewTodo);

router
  .route('/:id')
  .get(todoController.getTodo)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

module.exports = router;
