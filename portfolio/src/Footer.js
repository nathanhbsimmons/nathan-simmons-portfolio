import React, {Component} from 'react';
import Flexbox from 'flexbox-react';
import './App.css';

const styles = {

  border: {
    height: 46,
    width: '40%',
    borderTop: '2px solid #EF5743',
    background: 'ghostwhite'
  },
}

class Footer extends Component {

  render() {
    return (
    <Flexbox flexDirection="row" justifyContent="space-between">
      <div style={styles.border}></div>
      <a href="https://www.linkedin.com/in/nathan-simmons-114b5695/"
      target="_blank" rel="noopener noreferrer"
      className="social fa fa-linkedin fa-lg" alt='linkedin logo'> </a>

      <a  href="https://github.com/nathanhbsimmons" target="_blank"
      rel="noopener noreferrer" className="social fa fa-github fa-lg"
      alt='github logo'> </a>
      <div style={styles.border}></div>
    </Flexbox>

    );
  }
}

export default Footer;
