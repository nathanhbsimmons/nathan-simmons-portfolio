import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ProjectCard from './Card.js'
import Nav from './Nav.js'
import Header from './Header.js'
import Footer from './Footer.js'





class App extends Component {


  render() {
    return (<div className="App">

      <MuiThemeProvider>
        <Header/>
        <Nav />
        <Footer/>
      </MuiThemeProvider>
    </div>);
  }
}

export default App;
