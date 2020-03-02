import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound.js';
import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (
    <div className="App">
       <Router>
       <NavBar/>
        <Switch>
          <Route path = '/'  exact component = {Home} />
          <Route component = {NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
