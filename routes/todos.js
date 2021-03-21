const express = require('express')
const router = express.Router()
const todosController = require('../db/controllers/todosController')
router.use(express.json())

router.get('/todos', todosController.getTodos)
router.get('/todos', todosController.getTodo)
router.post('/todos', todosController.postTodos)
router.patch('/todos/update', todosController.updateTodo)
router.get('/todos/complete', todosController.completeTodo)
router.delete('/todos', todosController.deleteTodo)

module.exports = router