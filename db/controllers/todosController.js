const Todo = require('../models/todos')

async function getTodos(req, res){
    const todos = await Todo.get()
    if(!todos){
        res.json({
            status : 404,
            body : "not found"
        })
    }
    res.json(todos)
}

async function postTodos(req, res){
     if(!req.body) {
        res.sendStatus(400).send({message : "body is empty"})
    }

   const addTodo = Todo.add(req.body)

    if(addTodo){
      res.json({
          status : 201,
          body : "ok"
      })
    }
}

async function updateTodo(req, res){
    const updateTodo = await Todo.update(req.query.id, req.body.title)

    if(!updateTodo){
        res.json({
            status : 404,
            body : "not found"
        })
    }

    res.json({
        status : 200,
        body : "ok"
    })
}

async function deleteTodo(req, res){
    const deleteTodo = await Todo.remove(req.query.id)

    if(!deleteTodo){
        res.json({
            status : 404,
            body : "not found"
        })
    }

    res.json({
        status : 200,
        body : "ok"
    })
}

module.exports = {
    getTodos,
    postTodos,
    updateTodo,
    deleteTodo
}