const express = require('express')
const router = express.Router()
const todosController = require('../db/controllers/todosController')
router.use(express.json())

router.get('/todos', todosController.getTodos)
router.post('/todos', todosController.postTodos)
router.patch('/todos', todosController.updateTodo)
router.delete('/todos', todosController.deleteTodo)

module.exports = router