import React, {useState, useContext} from "react";
import { ListsContext } from './ListsContext';

function ListsForm() {
const [loading, isLoading] = useState(true);
const [lists, setLists] = useContext(ListsContext); 
const [listName, setListName] = useState("");
const [listDescription, setListDescription] = useState("");

const saveList = async (listName, listDescription) => {
    await fetch('http://localhost:5000/lists', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    name: listName,
    description: listDescription
    }),
    });
}

const handleSubmit = async (e) => {
    e.preventDefault();
    await saveList(listName, listDescription);
    setLists(prevLists => [...prevLists, {name: listName, description: listDescription}]);
}

return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="list-name">List name</label>
            <input type="text" className="form-control" id="list-name" onChange={e => setListName(e.target.value)} value={listName} placeholder="Enter list name" required />
        </div>
        <div className="form-group">
            <label htmlFor="list-description">List description</label>
            <input type="text" className="form-control" id="list-description" onChange={e => setListDescription(e.target.value)} value={listDescription} placeholder="Enter list description" required />
        </div>
        <button type="submit" className="btn btn-success">Save</button>
        </form>  
    </div>
)
}

export default ListsForm;
