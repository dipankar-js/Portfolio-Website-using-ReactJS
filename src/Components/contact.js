import React, { Component } from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';

class Contact extends Component {
  render() {
    return (
    	<div className="contact-body">
		    <Grid className="contact-grid">
		        <Cell col={6}>
		        <div  >
		        	<img src='https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png' height='250px' width='auto' alt='DIPANKAR'/>
		        	<h1>DIPANKAR BARMAN</h1 >
		        	<p style={{textAlign:"center"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
		        </div>
		        </Cell>
		        <Cell col={6}>

		        <h1>CONTACT DETAILS</h1>
		        <hr/>
		        <List>
		        	<div className="contact-list">
					  <ListItem >
					    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
					    <i className="fa fa-phone-square" aria-hidden="true"/>
					     (+91)-9706463321
					    </ListItemContent>
					  </ListItem>
					  <ListItem >
					    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
					    <i className="fa fa-fax" aria-hidden="true"/>
					     (+91)-7002288627
					    </ListItemContent>
					  </ListItem>
					  <ListItem >
					    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
					    <i className="fa fa-envelope" aria-hidden="true"/>
					     dipankar951@gmail.com
					    </ListItemContent>
					  </ListItem>
					  <ListItem >
					    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton'}}>
					    <i className="fa fa-skype" aria-hidden="true"/>
					     BARMAN498
					    </ListItemContent>
					  </ListItem>
					</div>
				</List>

		        </Cell>
		    </Grid>
    	</div>


    )
}
}
export default Contact;