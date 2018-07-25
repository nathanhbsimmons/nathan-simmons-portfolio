import React, {Component} from 'react';
import Flexbox from 'flexbox-react';
import './App.css';
import IconButton from 'material-ui/IconButton';
import Mailbox from 'material-ui/svg-icons/action/markunread-mailbox';
import Work from 'material-ui/svg-icons/action/work';
import {deepOrange800, tealA700} from 'material-ui/styles/colors';
import resume from './NathanSimmons.pdf'

const styles = {
  buttonStyles: {
    width: 200,
    height: 200,
    marginTop: 20
  },
  iconStyles: {
    width: 100,
    height: 100
  },
  header: {
    marginTop: 0,
    fontWeight: 400,
    color: '#eda89e'
  }
}

class Contact extends Component {

  render() {
    return (<Flexbox flexDirection="row" justifyContent="space-around">
      <Flexbox flexDirection="column">
        <IconButton href="mailto:nathanhbsimmons@gmail.com" style={styles.buttonStyles} iconStyle={styles.iconStyles} tooltip="Email">
          <Mailbox color={deepOrange800} hoverColor={tealA700}></Mailbox>
        </IconButton>
        <h1 style={styles.header}>EMAIL</h1>
      </Flexbox>
      <Flexbox flexDirection="column">
      
      <IconButton style={styles.buttonStyles} iconStyle={styles.iconStyles} tooltip="Resume" href={resume} download>
      <Work color={deepOrange800} hoverColor={tealA700}><h1 style={styles.header}>RESUME</h1></Work>
    </IconButton>
  
        
        <h1 style={styles.header}>RESUME</h1>
      </Flexbox>
    </Flexbox>);
  }
}

export default Contact;
