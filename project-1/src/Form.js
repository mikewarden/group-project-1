import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LanguageMenu from './LanguageMenu.js';
import ExperienceMenu from './ExperienceMenu.js';
import UserName from './UserName.js';
import './App.css';

const Form = (props) => {

  const [username, setUsername] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const [experience, setExperience] = React.useState("");

  const handleName = (newName) => {
    setUsername(newName);
    props.changeUserName(newName);
  }

  const handleLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    props.changeLanguage(newLanguage);
  }

  const handleExperience = (experienceLevel) => {
    setExperience(experienceLevel);
  }
 
	return (
		<div>
		<UserName onInput={handleName}/>	
        <LanguageMenu onInput={handleLanguage}/>
        <ExperienceMenu onInput={handleExperience} />
          
          <br/>
        	<div>
        		<Link to="/test" className="submit-btn">{ <Button className="btn" variant="outlined" size="large" onClick={props.handleClick}> submit </Button> }</Link>
        	</div>
    </div>
	);
}

export default Form; 