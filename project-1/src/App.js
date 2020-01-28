import React from 'react';
import ReactDOM from 'react-dom'; 
import Form from './Form.js';
import Navigation from './Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="App">
    <Navigation />
      <h1>Dev Quiz</h1>
      <Form />
    </div>
  );
}

export default App;
