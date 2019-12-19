const express = require('express');
const { TaskModel } = require('./models/tasks.js');

const init = async () => {
	const data = {
		tasks: await new TaskModel().load()
	};

	const api = express();
	api.use(express.json());

	// GET /tasks - get all tasks
  api.get('/tasks', (req, res) => {
		const tasks = data.tasks.toArray();
    res.status(200).send(tasks);
  });

	// GET /tasks/:id - get one task
  api.get('/tasks/:id', (req, res) => {
    const task = data.tasks.get(req.params.id);
    res.status(200).send(task);
	});

	// POST /tasks - create new task
  api.post('/tasks', async (req, res) => {
		const newTask = data.tasks.create(req.body);
		await data.tasks.save();
		res.status(200).send(newTask);
	});
	
	// DELETE /tasks/:id - delete existing task
  api.delete('/tasks/:id', async (req, res) => {
    const deletedTask = data.tasks.delete(req.params.id);
    await data.tasks.save();
    res.status(200).send(deletedTask);
  });

  // PUT /tasks/:id - update existing task
  api.put('/tasks/:id', async (req, res) => {
    const updatedTask = data.tasks.update(req.params.id, req.body);
		await data.tasks.save();
    res.status(200).send(updatedTask);
  });
	
	// start the api
  api.listen(8080, () => console.log('Listening...'));
}

init();
