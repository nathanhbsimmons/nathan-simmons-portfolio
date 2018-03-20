import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ProjectCard from './Card.js'
import Nav from './Nav.js'
import logo from './logo.png';


const styles = {
  header: {
    background: 'ghostwhite',
    height: '30vh'
  },
  logo: {
    height: '25vh'
  },
  title: {
    color: '#EF5743',
    fontSize: 50,
    fontWeight: 'lighter',
    marginTop: 0
  }
};

class App extends Component {


  render() {
    return (<div className="App">
      <header style={styles.header} className="App-header">
        <img src={logo} style={styles.logo} alt="logo"/>
        <h1 style={styles.title} className="App-title">NATHAN SIMMONS</h1>
      </header>

      <MuiThemeProvider>
        <Nav />
      </MuiThemeProvider>
    </div>);
  }
}

export default App;
