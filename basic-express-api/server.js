const express = require('express');
const cors = require('cors')
const jwt = require('jsonwebtoken')
const app = express();


const PORT = 3000;
const JWT_SECRET = 'homnaytoibuonmotminhtenphodong'
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json())

const users = [
    {
        username: 'Admin',
        password: '123456'
    },
    {
        username: 'NNB',
        password: '123456'
    }
]
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
let nextId = 4;

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Invalid token" });
            }

            req.user = user;
            next();
        });
    } else {
        return res.status(401).json({ message: "Token required" });
    }
};
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = users.find(u => u.username === username);

        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const accessToken = jwt.sign(
            { username: user.username },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ accessToken ,user});

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

app.post('/register' ,(req , res ) => {
    const {username , password} = req.body ;
    if(users.find (u => u.username === username) ){
        return res.status(409).json({message : "username already exists"})
    }
    const newUser = {username , password} ;
    users.push(newUser) ;
    res.status(201).json( {message : "user register successfully"})
})




app.get('/todo', authenticateJWT, (req, res) => {
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
    if (title === undefined || completed === undefined) {
        return res.status(400).json({ message: "loi ca 2 title va completed cua Put" })
    }
    if (typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'loi  completed kiem tra Boolean' })
    }
    const todoIndex = todo.findIndex(todo => {
        return todo.id === todoId
    })
    if (todoIndex === -1) {
        return res.status(404).json({ message: `todo voi id ${todoId} khong ton tai` })
    }
    const updateTodo = {
        id: todoId,
        title: title,
        completed: completed
    };
    todo[todoIndex] = updateTodo;
    res.json(updateTodo)

})
app.patch('/todo/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todoIndex = todo.findIndex(todo => {
        return todo.id === todoId
    })
    if (todoIndex === -1) {
        return res.status(404).json({ message: `todo voi id ${todoId} khong ton tai` })
    }
    todo[todoIndex] = { ...todo[todoIndex], ...req.body };
    res.json(todo[todoIndex])

})
app.delete('/todo/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todoIndex = todo.findIndex(todo => {
        return todo.id === todoId
    })
    if (todoIndex === -1) {
        return res.status(404).json({ message: `todo voi id ${todoId} khong ton tai` })
    }
    todo.splice(todoIndex, 1);
    res.status(204).send()
})
app.listen(PORT, () => {
    console.log(`sever dang nghe tai http://localhost:${PORT}`)
})