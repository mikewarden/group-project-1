import React, {useEffect} from 'react';
import Questions from './Questions.js';
import Form from './Form.js';
import About from './About.js';
import Resources from './Resources.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

const Navigation = (props) => {

  const [users, setUsers] = React.useState([]);
  const [username, setUsername] = React.useState("");

  const getDataFromAPI = () => {
    fetch("http://localhost:8080/users")
      .then( (res) => res.json() )
      .then( (response) => {
        setUsers(response);
        console.log(response);
    });
  }

  useEffect(() => {
    getDataFromAPI();
  },[]);

  const saveUser = (newUser) => {
    fetch("http://localhost:8080/user",
    {
      method  : "post",
      headers : { "Content-Type" : "application/json" },
      body    : JSON.stringify({
        id : 0,
        username : "",
        experienceLevel : "",
        languages : ["C++", "Java", "Javascript", "Python"],
        selectedLanguage : "",
        selectedCategory : "Job Training"
      })
    })
    .then(() => { 
      getDataFromAPI();
    });
  }
    
	return (
		<div>
			<Router>
      			<div>
        			<nav id="navbar">
          				<ul>
          					<li>
              					<Link id="home" className="nav-item" to="/">Home</Link>
                            </li>
                            <li>
                                <Link id="resources" className="nav-item" to="/resources">Resources</Link>
                            </li>
                            <li>
                                <Link id="about_section" className="nav-item" to="/about">About</Link>
                            </li>                        
          
                        </ul>
                    </nav>

                    <div id="content_body">
                        <Switch>
                            <Route exact path="/">
                                <h1>Dev Quiz</h1>
          	                    <Form  handleClick={saveUser}/>
                            </Route>
                            <Route path="/resources">
          	                    <Resources />
                            </Route>
                             <Route path="/about">
          	                    <About />
                            </Route>
                            <Route path="/test">
                                <h1>Dev Quiz</h1>
                                <h3>Hello {username}</h3>
          	                     <Questions />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
		</div>

	)
}

export default Navigation;