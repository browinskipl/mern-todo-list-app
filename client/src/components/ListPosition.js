import React, { useContext } from 'react';
import { ListsContext } from './ListsContext';
import { Link } from 'react-router-dom';

function ListPosition() {
  const [lists, setLists] = useContext(ListsContext); 
  
  const removeList = (id) => {
    fetch('http://localhost:5000/lists/' + id, {
    method: 'DELETE',
    headers: {
    'Content-Type': 'application/json',
    }
    }).then(setLists(lists.filter(item => item._id !== id)));
  }

  return (
    <tbody>
        {lists.map((item) => 
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <Link to ={`/list/${item._id}`}>
                    <button type="button" className="btn btn-info">Open list</button>
                  </Link>
                </td>
                <td><button onClick={() => removeList(item._id)} type="button" className="btn btn-danger">Remove list</button></td>
            </tr>
        )}
    </tbody>
  );
}

export default ListPosition;
