import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LanguageMenu from './LanguageMenu.js';
import ExperienceMenu from './ExperienceMenu.js';
import './App.css';

const Form = (props) => {

  const [username, setUsername] = React.useState("");
  const [language, setLanguage] = React.useState("");

  const handleInput = (e) => {
    setUsername(e.target.value);
  }
  const handleLanguage = (e) => {
    setLanguage(e.target.value);
      }
 
	return (
		<div>
			<TextField label="UserName" className="name-field" onInput={handleInput}  margin="normal" variant="outlined" />
        <LanguageMenu />
        <ExperienceMenu />
          
          <br/>
        	<div>
        		<Link to="/test" className="submit-btn">{ <Button className="btn" variant="outlined" size="large" onClick={props.handleClick}> submit </Button> }</Link>
        	</div>
    </div>
	);
}

export default Form; 