import React, {useState, useEffect, createContext} from 'react';

export const ListsContext = createContext();

export const ListsProvider = props => {
    const [loading, isLoading] = useState(true);
    const [lists, setLists] = useState([]);

    useEffect(() => {
        getLists();
    }, []);

    const getLists = async () => {
        await fetch('http://localhost:5000/lists', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            })
            .then((response) => response.json())
            .then((data) => setLists(data))      

            isLoading(false);
    };

    return (
        <ListsContext.Provider value={[lists, setLists]}>{props.children}</ListsContext.Provider>
    );
};
