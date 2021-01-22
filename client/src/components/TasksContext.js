import React, {useState, useEffect, createContext} from 'react';

export const TasksContext = createContext();

export const TasksProvider = props => {
    const [loading, isLoading] = useState(true);
    const [tasks, setTasks] = useState([]);
    const listID = window.location.pathname.split('/').slice(2);

    useEffect(() => {
        getTasks();
    }, []);
    
    const getTasks = async () => {
        await fetch('http://localhost:5000/tasks/' + listID, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            })
            .then((response) => response.json())
            .then((data) => setTasks(data))      

            isLoading(false);
    };
    

    return (
        <TasksContext.Provider value={[tasks, setTasks]}>{props.children}</TasksContext.Provider>
    );
};
