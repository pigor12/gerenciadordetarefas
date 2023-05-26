const express = require('express');
const app = express();
app.use(express.json());

let tasks = [];

// API Endpoint → GET /tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// API Endpoint → POST /tasks
app.post('/tasks', (req, res) => {
    const task = {
        id: tasks.length + 1,
        name: req.body.name,
        category: req.body.category,
        deadline: req.body.deadline,
        assignedTo: req.body.assignedTo
    };
    tasks.push(task);
    res.status(201).json(task);
});

// API Endpoint → GET /tasks/:id
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Tarefa com o ID fornecido não encontrada.');
    res.json(task);
});

// API Endpoint → PUT /tasks/:id
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Tarefa com o ID fornecido não encontrada.');

    task.name = req.body.name;
    task.category = req.body.category;
    task.deadline = req.body.deadline;
    task.assignedTo = req.body.assignedTo;

    res.json(task);
});

// API Endpoint → DELETE /tasks/:id
app.delete('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Tarefa com o ID fornecido não encontrada.');

    const index = tasks.indexOf(task);
    tasks.splice(index, 1);

    res.json(task);
});

// Inicializar servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor disponível na porta ${port}...`));
