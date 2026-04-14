const express = require('express');
const cors = require('cors')
const app = express();


const PORT = 3000;
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json())
let todo = [
    {
        id: 1,
        title: 'aaaa',
        completed: false
    },
    {
        id: 2,
        title: 'bbbb',
        completed: false
    },
    {
        id: 3,
        title: 'cccc',
        completed: false
    }
];
let nextId = 4
app.get('/abc', (req, res) => {
    res.json('aaaaaaa')
});

app.get('/todo', (req, res) => {
    res.json(todo)
})

app.get('/todo/:id', (req, res) => {
    const todoId = parseInt(req.params.id)
    const todos = todo.find(todo => {
        return todo.id === todoId;
    })
    if (todos) {
        res.json(todos)
    }
    else {
        res.status(404).json({ message: ` khong thay id : ${todoId} ` })
    }
})
app.post('/todo', (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ message: 'loi title' });
    }
    const newTodo = {
        id: nextId,
        title: title,
        completed: false
    }
    nextId++;
    todo.push(newTodo);
    res.status(201).json(newTodo)

})

app.put('/todo/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const { title, completed } = req.body
    // validation
    if(title === undefined || completed === undefined) {
        return res.status(400).json({message :"loi ca 2 title va completed cua Put"})
    }
    if(typeof completed !== 'boolean'){
        return res.status(400).json({message : 'loi  completed kiem tra Boolean'})
    }
    const todoIndex = todo.findIndex(todo => {
        return todo.id === todoId
    })
    if(todoIndex === -1) {
        return res.status(404).json({message :`todo voi id ${todoId} khong ton tai`})
    }
    const updateTodo = {
            id : todoId ,
            title : title ,
            completed : completed
    };
    todo[todoIndex] = updateTodo ;
    res.json(updateTodo)

})
app.patch('/todo/:id' ,(req ,res) => {
    const todoId = parseInt(req.params.id) ;
    const todoIndex = todo.findIndex(todo => {
        return todo.id === todoId
    })
    if (todoIndex === -1) {
        return res.status(404).json({ message: `todo voi id ${todoId} khong ton tai` })
    }
    todo[todoIndex] = {...todo[todoIndex] , ...req.body} ;
    res.json(todo[todoIndex])

})
app.delete('/todo/:id',(req, res) => {
    const todoId = parseInt(req.params.id);
    const todoIndex = todo.findIndex(todo => {
        return todo.id === todoId
    })
    if (todoIndex === -1) {
        return res.status(404).json({ message: `todo voi id ${todoId} khong ton tai` })
    }
    todo.splice(todoIndex,1) ;
    res.status(204).send()
})
app.listen(PORT, () => {
    console.log(`sever dang nghe tai http://localhost:${PORT}`)
})