import React, {Component} from 'react';
import './App.css';
import CrossfadeImage from 'react-crossfade-image'

const styles = {
  header: {
    background: 'ghostwhite',
    height: '30vh'
  },
  logo: {
    paddingTop: 5,
    margin: 'auto',
    height: '25vh',
    borderRadius: '50%'
  },
  title: {
    color: '#EF5743',
    fontSize: 50,
    fontWeight: 'lighter',
    marginTop: 0,
    marginBottom: 0
  }
};

class Header extends Component {

  render() {
    return (<header style={styles.header} className="App-header">
      <CrossfadeImage style={styles.logo} src={this.props.fade}/>

      <h1 style={styles.title} className="App-title">NATHAN SIMMONS</h1>
    </header>);
  }
}

export default Header;
