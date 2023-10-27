//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";


import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>        
        <Routes>
          <Route path="/"><News pageSize={5} country="in" category="general"/></Route>
          <Route path="/business"><News pageSize={5} country="in" category="business"/></Route>
          <Route path="/entertainment"><News pageSize={5} country="in" category="entertainment"/></Route>
          <Route path="/general"><News pageSize={5} country="in" category="general"/></Route>
          <Route path="/health"><News pageSize={5} country="in" category="health"/></Route>
          <Route path="/science"><News pageSize={5} country="in" category="science"/></Route>
          <Route path="/sports"><News pageSize={5} country="in" category="sports"/></Route>
          <Route path="/technology"><News pageSize={5} country="in" category="technology"/></Route>          
                   
        </Routes>
        </Router>
      </div>
    )
  }
}
