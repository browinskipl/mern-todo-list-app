
import React, { useContext } from 'react';
import { TasksContext } from './TasksContext';

function Task() {
  const [tasks, setTasks] = useContext(TasksContext); 
  
  const removeTask = (id) => {
    fetch('http://localhost:5000/tasks/' + id, {
    method: 'DELETE',
    headers: {
    'Content-Type': 'application/json',
    }
    }).then(setTasks(tasks.filter(item => item._id !== id)));
  }

  return (
    <tbody>
        {tasks.map((item) => 
            <tr key={item._id}>
                <td>{item.task}</td>
                <td><button onClick={() => removeTask(item._id)} type="button" className="btn btn-danger">Remove task</button></td>
            </tr>
        )}
    </tbody>
  );
}

export default Task;
