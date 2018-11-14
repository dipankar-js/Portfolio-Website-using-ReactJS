import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';

class Landing extends Component {
  render() {
    return (
    	<div style={{width:'100%',height:'100px', margin:'auto'}}>
	    	<Grid className="landing-grid">
	    		<Cell col={12} >
	    			<img src="https://openclipart.org/image/2400px/svg_to_png/277084/Male-Avatar-3.png"
	    			alt="avatar"
	    			className="avatar-img"
	    			/>
	    			<div className="banner-text">
		    			<h1>Full Stack Web Dveloper </h1>
		    			<hr/>	
		    			<p>HTML/CSS | JavaScript | React | React Native | Express | MongoDB </p>
		    			<div className="social-links">

		    				{/*Youtube */}
		    				<a href="/" rel="noopener noreferrer" target="_blank">
		    				<i className="fa fa-youtube-square" aria-hidden="true"/>
		    				</a>

		    				{/*GitHub */}
		    				<a href="/" rel="noopener noreferrer" target="_blank">
		    				<i className="fa fa-github-square" aria-hidden="true"/>
		    				</a>

		    				{/*linkedin */}
		    				<a href="/" rel="noopener noreferrer" target="_blank">
		    				<i style={{color:"white"}} className="fa fa-linkedin-square" aria-hidden="true"/>
		    				</a>
		    				
		    				{/*codecamp */}
		    				<a href="/" rel="noopener noreferrer" target="_blank">
		    				<i className="fa fa-free-code-camp" aria-hidden="true"/>
		    				</a>
		    			</div>
	    			</div>
	    			<div className="block">
	    			</div>
	    		</Cell>
	    	</Grid>
    	</div>


    )
}
}
export default Landing;