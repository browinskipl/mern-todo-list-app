import React, {useState, useContext} from "react";
import { TasksContext } from './TasksContext';

function TaskForm() {
const [loading, isLoading] = useState(true);
const [tasks, setTasks] = useContext(TasksContext); 
const [task, setTask] = useState("");
const listID = window.location.pathname.split('/').slice(2)[0];

const saveTask = async (task) => {
    return await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    task: task,
    list: listID,
    })
    }).then((response) => response.json());
}

const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = await saveTask(task);
    setTasks(tasks => [...tasks, newTask]);
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


