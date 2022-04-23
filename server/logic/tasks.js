let tasks = {
	1: {
		title: 'title1',
		description: 'descr1'
		id: 1
	},
	2: {
		title: 'title2',
		description: 'descr2'
		id: 2
	},
	3: {
		title: 'title3',
		description: 'descr3'
		id: 3
	},
	4: {
		title: 'title4',
		description: 'descr4'
		id: 4
	},
	5: {
		title: 'title5',
		description: 'descr5'
		id: 5
	}
};

let nextIndex = 6;

function passesFilter(targetObject, filterObject) {
	return Object.keys(filterObject).every(key => {
		return targetObject[key] && targetObject[key] === filterObject[key];
	});
}

function getAllTasks() {
	return Object.values(tasks);
};

function getTask(filter) {
	return Object.values(tasks).reduce((acc, curr) => {
		if (passesFilter(curr, filter)) {
			acc.push(curr);
		}
		return acc;
	}, []);
};

function addNewTask(task) {
	tasks[nextIndex] = {...task, id: nextIndex};
	nextIndex++;
	return getAllTasks();
};

function editTask(id, data) {
	tasks[id] = {...data, id};
	return getAllTasks();
}

function deleteTask(id) {
	delete tasks[id];
	return getAllTasks();
}

function destroyTasks() {
	tasks = {};
	return getAllTasks();
}

module.exports = {
	getAllTasks,
	getTask,
	addNewTask,
	editTask,
	deleteTask,
	destroyTasks
}