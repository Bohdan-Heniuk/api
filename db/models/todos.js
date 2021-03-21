const db = require('../db')

async function get(){
    return db('todos').select('*')
}

async function find(id){
    return db('todos').where({id : id}).select('*')
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

module.exports = {
    get,
    find,
    add,
    update,
    remove
}