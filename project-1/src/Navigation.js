import React from 'react';
import Questions from './Questions.js';
import Form from './Form.js';
import About from './About.js';
import Resources from './Resources.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

const Navigation = (props) => {
   
    const [user, setUser] = React.useState("User");
    const [selectedQuestion, setSelectedQuestion] = React.useState([]);

    const handleNameChange = (name) => {
    setUser(name);
  }

    const getQuestionsFromAPI = ()=> {
    let randQuestion = 1;
    fetch("http://localhost:8080/entry/" + randQuestion)
    .then((res) => res.json())
    .then((response)=>{
      console.log(response);
      setSelectedQuestion(response.question);
    }).catch((err) => console.log(err));
    
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
          	                    <Form  handleClick={getQuestionsFromAPI} question={"hello"}/>
                            </Route>
                            <Route path="/resources">
          	                    <Resources />
                            </Route>
                             <Route path="/about">
          	                    <About />
                            </Route>
                            <Route path="/test">
                                <h1>Dev Quiz</h1>
                                <h3>Hello {user}</h3>
          	                     <Questions />
                                 <p>{selectedQuestion}</p>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
		</div>

	)
}

export default Navigation;