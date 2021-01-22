import React from "react";
import ListPosition from './ListPosition';

function ListsList() {
    return (
        <div>
          <table className="table table-striped lists-list">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">#</th>
                <th scope="col">#</th>
                </tr>
            </thead>
            <ListPosition/>            
        </table>
        </div>
    )
};

export default ListsList;
