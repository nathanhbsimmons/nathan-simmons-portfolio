import React, {Component} from 'react';
import Flexbox from 'flexbox-react';
import './App.css';

const styles = {
  // footerContainer: {
  //     display: 'flex',
  //     justifyContent: 'spaceBetween',
  // },
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
        <p>ggg</p>
      <div style={styles.border}></div>
    </Flexbox>

    );
  }
}

export default Footer;
