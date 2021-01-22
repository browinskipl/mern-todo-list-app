import React from "react";
import Task from './Task';

function TasksList(id) {
    return (
        <div>
          <h1>TasksList</h1>
          <table className="table table-striped task-list">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">#</th>
                </tr>
            </thead>
            <Task/>
        </table>
        </div>
    )
};

export default TasksList;
