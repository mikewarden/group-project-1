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
    const [language, setLanguage] = React.useState("");
    const [experience, setExperience] = React.useState("");

    const getQuestionsFromAPI = ()=> {
    let randQuestion = 2;
    fetch("http://localhost:8080/entry/" + randQuestion)
    .then((res) => res.json())
    .then((response)=>{
      console.log(response.question);
      setSelectedQuestion(response.question);
    }).catch((err) => console.log(err));
    
  }
    const  changeName = (newName) => {
    setUser(newName);
  }

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    }

    const changeExperience = (newExperience) => {
        setExperience(newExperience);
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
          	                    <Form  handleClick={getQuestionsFromAPI} changeUserName={changeName} changeLanguage={changeLanguage}
                                    changeExperience={changeExperience}/>
                            </Route>
                            <Route path="/resources">
          	                    <Resources />
                            </Route>
                             <Route path="/about">
          	                    <About />
                            </Route>
                            <Route path="/test">
                                <h1>Dev Quiz</h1>
                                <h2>Hello { user } </h2>
                                <h3>{experience} {language} Questions</h3>
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