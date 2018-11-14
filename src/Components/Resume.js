import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';

class Resume extends Component {
  render() {
    return (
    	<Grid>
    		<Cell col={4}> 4
    		</Cell>

    		
    		<Cell col={8} style={{backgroundColour:'black'}}>
    		 MY RESUME
    		</Cell>
    		

    	</Grid>


    )
}
}
export default Resume;