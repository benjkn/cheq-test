const express = require('express');
const router = express.Router();

const {getAllTasks, getTask, addNewTask, editTask, deleteTask, destroyTasks} = require('../logic/tasks');


router.get('/?', function(req, res, next) {
	if (req.query && req.query.title) {
		const tasks = getTask({title: req.query.title});
		res.send(tasks);
	} else {
		const tasks = getAllTasks();
		res.send(tasks);
	}
});


router.get('/:index', function(req, res, next) {
	const tasks = getTask({id: Number(req.params.index)});
	res.send(tasks[0]);
});

router.post('/', function(req, res, next) {
	addNewTask(req.body);
	res.send('OK');	
});

router.put('/:index', function(req, res, next) {
	editTask(req.params.index, req.body);
	res.send('OK');
});

router.delete('/:index', function(req, res, next) {
	deleteTask(req.params.index);
  	res.send('OK');
});

router.delete('/', function(req, res, next) {
	destroyTasks();
  	res.send('OK');
});

module.exports = router;
