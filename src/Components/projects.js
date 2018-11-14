import React, { Component } from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from "react-mdl";

class Projects extends Component {

  constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggle(){
    	if(this.state.activeTab===0){
    		return(
                <div className="projects-grid">
                        {/* Project 1 */}
        		      <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://tse3.mm.bing.net/th?id=OIP.dE4ObnWQ46TFJp-QbPAkMAHaHa&pid=Api&w=2000&h=2000&rs=1&p=0) center / cover'}}>
                        React Project 1 </CardTitle>
                            
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>YouTube</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                            {/* Project 2 */}
                      <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://tse3.mm.bing.net/th?id=OIP.dE4ObnWQ46TFJp-QbPAkMAHaHa&pid=Api&w=2000&h=2000&rs=1&p=0) center / cover'}}>
                        React Project 1 </CardTitle>
                            
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>YouTube</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                            {/* Project 3 */}
                      <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://tse3.mm.bing.net/th?id=OIP.dE4ObnWQ46TFJp-QbPAkMAHaHa&pid=Api&w=2000&h=2000&rs=1&p=0) center / cover'}}>
                        React Project 1 </CardTitle>
                            
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>YouTube</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                </div>

               
    			)
    	}
    	if(this.state.activeTab===1){
    		return(
    			<div className="projects-grid">
                        {/* Project 1 */}
                      <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://tse2.mm.bing.net/th?id=OIP.cSTi60BzRnJ8SHHZ1Gb5sAHaHa&pid=Api&w=626&h=626&rs=1&p=0) center / cover'}}>
                        Android Project 1 </CardTitle>
                            
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>YouTube</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                            {/* Project 2 */}
                      <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://tse2.mm.bing.net/th?id=OIP.cSTi60BzRnJ8SHHZ1Gb5sAHaHa&pid=Api&w=626&h=626&rs=1&p=0) center / cover'}}>
                        Android Project 2 </CardTitle>
                            
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>YouTube</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                            {/* Project 3 */}
                      <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://tse2.mm.bing.net/th?id=OIP.cSTi60BzRnJ8SHHZ1Gb5sAHaHa&pid=Api&w=626&h=626&rs=1&p=0) center / cover'}}>
                        Android Project 2 </CardTitle>
                            
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>YouTube</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                </div>
    			)
    	}
    	if(this.state.activeTab===2){
    		return(
    			<div className="projects-grid">
                        {/* Project 1 */}
                      <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://www.bing.com/th?id=OIP.WojLqTpeoDkXjeP3ev4yFAHaEu&pid=Api&w=850&h=543&rs=1&p=0) center / cover'}}>
                        Android Project 1 </CardTitle>
                            
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>YouTube</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                            {/* Project 2 */}
                      <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://www.bing.com/th?id=OIP.WojLqTpeoDkXjeP3ev4yFAHaEu&pid=Api&w=850&h=543&rs=1&p=0) center / cover'}}>
                        Android Project 2 </CardTitle>
                            
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>YouTube</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                </div>
    			)
    	}
    	if(this.state.activeTab===3){
    		return(
    			<div className="projects-grid">
                        {/* Project 1 */}
                      <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://www.vizteams.com/wp-content/uploads/2015/07/java-logo.png) center / cover'}}>
                        Java Project </CardTitle>
                            
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>YouTube</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                            {/* Project 2 */}
                      <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://www.vizteams.com/wp-content/uploads/2015/07/java-logo.png) center / cover'}}>
                        Java Project</CardTitle>
                            
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>YouTube</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                </div>
    			)
    	}
    }

    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Android</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Java</Tab>
                </Tabs>
                <section >
                <Grid >
                	<Cell col={12}>
                    	<div className="content">{this.toggle()}</div>
                    </Cell>
                </Grid>
                </section>
            </div>    
        );
    }
}
export default Projects;