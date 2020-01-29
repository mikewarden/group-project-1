import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
        	<br/>
        		
          		<Checkbox onInput="" value="female" name="female"/> Female
      
          		<Checkbox onInput="" value="male" name="male"/> Male
        
          		<Checkbox onInput="" value="non-binary" name="nonbinary"/> Non-binary
          		<Checkbox onInput="" value="other" name="other"/> Other
          		<Checkbox onInput="" value="none" name="none"/> Prefer not to say
            </div>
            <div>
      	<br/>
        <InputLabel id="open-select-label">Choose a Language:</InputLabel>
        <Select
          labelId="open-select-label"
          id="open-select">
          <MenuItem value={1}>Java</MenuItem>
          <MenuItem value={2}>Python</MenuItem>
          <MenuItem value={3}>JavaScript</MenuItem>
          <MenuItem value={4}>C++</MenuItem>
        </Select>
      	<br/>
      	<br/>
        <InputLabel id="open-select-label">Level of Experience:</InputLabel>
        <Select
          labelId="open-select-label"
          id="open-select">
          <MenuItem value={1}>Beginner</MenuItem>
          <MenuItem value={2}>Mid-Level</MenuItem>
          <MenuItem value={3}>Advanced</MenuItem>
        </Select>
      
    </div>
          <br/>
        	<div>
        		<Link to="/test" className="submit-btn">{ <Button className="btn" variant="outlined" size="large" onClick={props.handleClick}> submit </Button> }</Link>
        	</div>
        
		</div>
	);
}

export default Form; 