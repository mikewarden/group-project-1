import React from 'react';
import ReactDOM from 'react-dom'; 
import Navigation from './Navigation';
import Form from './Form.js';
import Questions from './Questions.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="App">
    	<Navigation />
    	<footer>Group Project 2020.</footer>
    </div>
  );
}

export default App;
