import React, { Component } from 'react';
import logo from './images/super.jpg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Switch, Route, Link} from 'react-router-dom';
import { HashRouter} from 'react-router-dom';

import Home from './Home';
import Creates from './Creates';
import Display from './Display';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Navbar bg="dark" variant="dark">
            <Link to={"/"}><Navbar.Brand href="home">Home</Navbar.Brand></Link>
            <Nav className="mr-auto">
              <Link to="/creates">Creates</Link>
            </Nav>
          </Navbar>   
          <HashRouter>
            <div>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/character/:id" component={Display}/>
                  <Route exact path="/creates" component={Creates}/>
              </Switch>
            </div>      
          </HashRouter>   
      </React.Fragment>
    );
  }
}

export default App;
