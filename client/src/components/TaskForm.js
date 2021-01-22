import React, {useState, useContext} from "react";
import { TasksContext } from './TasksContext';

function TaskForm() {
const [loading, isLoading] = useState(true);
const [tasks, setTasks] = useContext(TasksContext); 
const [task, setTask] = useState("");
const listID = window.location.pathname.split('/').slice(2)[0];

const saveTask = async (task) => {
    await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    task: task,
    list: listID,
    }),
    });
}

const handleSubmit = async (e) => {
    e.preventDefault();
    await saveTask(task);
    setTasks(prevTasks => [...prevTasks, {task: task}]);
}

return (
    <div className="row justify-content-center">
        <form className="form-inline" onSubmit={handleSubmit}>
            <input type="text" className="form-control" id="task" onChange={e => setTask(e.target.value)} value={task} placeholder="Enter new task" required />
            <button type="submit" className="btn btn-success">Save</button>
        </form>  
    </div>
)
}

export default TaskForm;


