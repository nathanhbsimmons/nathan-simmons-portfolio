import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ProjectCard from './Card.js'
import Nav from './Nav.js'
import logo from './logo.png';
import './App.css';



class App extends Component {





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nathan Simmons</h1>
        </header>

         <MuiThemeProvider>
            <Nav/>
            {/* <ProjectCard/> */}
         </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
