import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import List from './components/List';
import Lists from './components/Lists';
import { ListsProvider } from './components/ListsContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
        <ListsProvider>
          <Route path='/list/:list' component={List}/>
          <Route exact path='/' component={Lists}/>
        </ListsProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
