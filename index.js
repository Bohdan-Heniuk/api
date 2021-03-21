const express = require('express')
const PORT = 8000
const cors = require('cors')
const app = express()
const todosRoutes = require('./routes/todos')
app.use(cors())

app.use(todosRoutes)

app.post('/todos', (req) => {
    console.log(req.body);
})
app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`)
})
