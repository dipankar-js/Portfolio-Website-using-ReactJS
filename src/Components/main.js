import React from 'react';
import {Switch,Route} from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './about';
import Projects from './projects';
import Resume from './Resume';
import Contact from './contact';




const Main=()=> (
	<Switch>
		<Route exact path="/" component={LandingPage} />
		<Route exact path="/about" component={AboutMe} />
		<Route exact path="/projects" component={Projects} />
		<Route exact path="/Resume" component={Resume} />
		<Route exact path="/contact" component={Contact} />
	</Switch>

)

export default Main;