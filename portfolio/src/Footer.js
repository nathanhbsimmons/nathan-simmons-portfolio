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
      <a href="https://www.linkedin.com/in/nathan-simmons-114b5695/" target="_blank" className="fa fa-linkedin fa-lg"></a>
      <a  href="https://github.com/nathanhbsimmons" target="_blank" className="fa fa-github fa-lg"></a>

      <div style={styles.border}></div>
    </Flexbox>

    );
  }
}

export default Footer;
