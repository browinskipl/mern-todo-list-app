import React from 'react';

function Navbar() { 
    return (
    <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">Todo List</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
    </nav>
    );
}

export default Navbar;
