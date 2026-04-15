const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];
let currentId = 1;

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const title = req.query.title;
    if (!title || title.trim() === "") {
        return res.status(400).json({ error: "Title is required and cannot be empty" });
    }

    const newTask = {
        id: currentId++,
        title: title,
        completed: false
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.post('/tasks/:id/complete', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (!task) return res.status(404).json({ error: "Task not found" });

    task.completed = true;
    res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) return res.status(404).json({ error: "Task not found" });

    tasks.splice(index, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});