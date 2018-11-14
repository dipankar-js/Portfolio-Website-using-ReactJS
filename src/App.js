import React, { Component } from 'react';
import { Layout, Header,Navigation, Drawer, Content} from 'react-mdl';
import './App.css';
import Main from './Components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="MY PORTFOLIO" scroll>
                  <Navigation>
                      <Link to="/">Home</Link>
                      <Link to="/about">About</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/Resume">Resume</Link>
                      <Link to="/contact">Contacts</Link>
                  </Navigation>
              </Header>
              <Drawer title="Menu Bar" style={{backgroundColor: 'black',color:'white',fontFamily:'Georgia'}}>
                  <Navigation >
                      <Link to="/">Home</Link>
                      <Link to="/about">About</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/Resume">Resume</Link>
                      <Link to="/contact">Contacts</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>
    </div>
    );
  }
}

export default App;
