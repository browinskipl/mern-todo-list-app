import React from 'react';
import TasksList from './TasksList';
import TaskForm from './TaskForm';
import { TasksProvider } from './TasksContext';

function List(list) {
console.log();
  return (
    <div>
      <TasksProvider>
        <TaskForm/>
        <TasksList id={list.match.params.list}/>
      </TasksProvider>
    </div>
  );
}

export default List;
