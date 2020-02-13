import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css';


export default function UserName(props) {
  const handleChange = event => {
    props.onInput(event.target.value);
    console.log(event.target.value);

  };
  return (
    <div>
      <TextField label="UserName" className="name-field" onInput={handleChange}  margin="normal" variant="outlined" />
    </div>
  );
}
