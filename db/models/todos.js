const db = require('../db')

async function get(){
    return db('todos').select('*')
}

async function find(id){
    return db('todos').where({id : id}).select('*').first()
}

async function add(todo){
    return db('todos').insert({
        title : todo.title
    })
}

async function update(id, title){
    return db('todos').where({id : id}).update({
        title : title
    })
}

async function remove(id){
    return db('todos').where({id : id}).delete()
}

async function complete(id, completed){
    return db('todos').where({id : id}).update({
        completed : !completed
    })
}

module.exports = {
    get,
    find,
    add,
    update,
    complete,
    remove
}