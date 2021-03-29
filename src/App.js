import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddEvent from './Components/AddEvent/AddEvent';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/addEvent">
        <AddEvent></AddEvent>
        </Route>
        <Route path="/dashboard">
         <Dashboard></Dashboard>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
