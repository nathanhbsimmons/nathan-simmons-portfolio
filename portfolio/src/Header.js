import React, {Component} from 'react';
import './App.css';
import logo from './logo.png';

const styles = {
  header: {
    background: 'ghostwhite',
    height: '30vh'
  },
  logo: {
    marginTop: 0,
    marginBottom: -10,
    height: '25vh'
  },
  title: {
    color: '#EF5743',
    fontSize: 50,
    fontWeight: 'lighter',
    marginTop: 0,
    marginBottom: 0,
  }
};

class Header extends Component {

  render() {
    return (
      <header style={styles.header} className="App-header">
        <img src={logo} style={styles.logo} alt="logo"/>
        <h1 style={styles.title} className="App-title">NATHAN SIMMONS</h1>
      </header>

    );
  }
}

export default Header;
