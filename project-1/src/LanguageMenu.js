import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import './App.css';


const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [language, setLanguage] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setLanguage(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} id="language-select-btn" onClick={handleOpen}></Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Choose a Language: </InputLabel>
        <br/>
        <br/>
        <br/>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={language}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>C++</MenuItem>
          <MenuItem value={2}>Java</MenuItem>
          <MenuItem value={3}>JavaScript</MenuItem>
          <MenuItem value={4}>Python</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
