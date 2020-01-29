import React from 'react';
import Questions from './Questions.js';
import Form from './Form.js';
import About from './About.js';
import Resources from './Resources.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

const Navigation = (props) => {
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
          	                    <Form />
                            </Route>
                            <Route path="/resources">
          	                    <Resources />
                            </Route>
                             <Route path="/about">
          	                    <About />
                            </Route>
                            <Route path="/test">
                                <h1>Dev Quiz</h1>
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