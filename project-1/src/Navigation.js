import React from 'react';
import Questions from './Questions.js';
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
        <nav>
          <ul>
          <li>
              <Link id="resources" className="nav-item" to="/">Resources</Link>
            </li>
            <li>
              <Link id="about_section" className="nav-item" to="/about">About</Link>
            </li>                        
          
          </ul>
        </nav>

       <div id="content_body">
        <Switch>
          
          <Route exact path="/">

          </Route>
          
          <Route path="/about">

          </Route>
          <Route path="/test">
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