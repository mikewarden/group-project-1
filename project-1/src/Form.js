import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import './App.css';

const Form = (props) => {
	return (
		<div>
			<TextField label="UserName" className="name-field" onInput="" margin="normal" variant="outlined" />
        <br/>
        <TextField label="Occupation" className="" onInput="" margin="normal" variant="outlined" />
        <br/>
        <TextField id="date" label="Date of Birth" type="date"
        defaultValue="2020-01-01" onInput=""  InputLabelProps={{shrink: true,}} margin="normal" variant="outlined"/>

        <div className="radio-inputs">
        <h4>Gender</h4>
          <Checkbox onInput="" value="female" name="female"/> Female
      
          <Checkbox onInput="" value="male" name="male"/> Male
        
          <Checkbox onInput="" value="non-binary" name="nonbinary"/> Prefer not to say
          </div>
        <div>
        <Link to="/test" className="submit-btn">{ <Button className="btn" variant="outlined" size="large" onClick={props.handleClick}>
          submit
        </Button> }</Link>
        </div>
        
		</div>
		);
}

export default Form; 