import React from 'react';
import Navigation from './Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

const Questions = () => {
  return (
    <div className="App">
      <h1>Dev Quiz</h1>
      <h2>Question Area</h2>
    </div>
  );
}

export default Questions;