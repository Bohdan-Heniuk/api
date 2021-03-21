const Todo = require('../models/todos')

async function getTodos(req, res) {

    if (req.query.id) {
        const todo = await Todo.find(req.query.id)
        if (!todo) {
            res.json({
                status: 404,
                body: "not found"
            })
        } else {
            res.json(todo)
        }
    }

    else {
        const todos = await Todo.get()
        if (!todos) {
            res.json({
                status: 404,
                body: "not found"
            })
        }
        res.json(todos)
    }


}

async function postTodos(req, res) {
    if (!req.body) {
        res.sendStatus(400).send({message: "body is empty"})
    }

    const addTodo = Todo.add(req.body)

    if (addTodo) {
        res.json({
            status: 201,
            body: "ok"
        })
    }
}

async function updateTodo(req, res) {
    const updateTodo = await Todo.update(req.query.id, req.body.title)

    if (!updateTodo) {
        res.json({
            status: 404,
            body: "not found"
        })
    } else {
        res.json({
            status: 200,
            body: "ok"
        })
    }
}


async function completeTodo(req, res) {
    const todo = await Todo.find(req.query.id)
    if (!todo) {
        res.json({
            status: 404,
            body: "not found"
        })
    }
    const result = await Todo.complete(todo.id, todo.completed)

    if (!result) {
        res.json({
            status: 400,
            body: "failed"
        })
    } else {
        res.json({
            status: 200,
            body: "ok"
        })
    }

}

async function deleteTodo(req, res) {
    const deleteTodo = await Todo.remove(req.query.id)

    if (!deleteTodo) {
        res.json({
            status: 404,
            body: "not found"
        })
    }

    res.json({
        status: 200,
        body: "ok"
    })
}

module.exports = {
    getTodos,
    postTodos,
    updateTodo,
    deleteTodo,
    completeTodo,
    getTodo
}