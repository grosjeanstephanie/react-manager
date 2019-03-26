import React, { Component } from 'react';
import logo from './images/super.jpg';
import './App.css';
import Home from './Home';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Display from './Display';
import {Switch, Route, Link} from 'react-router-dom';
import Creates from './Creates.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
      
        <div>
          <Navbar bg="dark" variant="dark">
            <Link to={"/"}><Navbar.Brand href="home">Home</Navbar.Brand></Link>
            <Nav className="mr-auto">
              <Nav.Link href="Creates">Creates</Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/display-:id" component={Display}/>
            <Route exact path="/creates" component={Creates}/>
        </Switch>
        </div> 
    
      </React.Fragment>
    );
  }
}

export default App;
