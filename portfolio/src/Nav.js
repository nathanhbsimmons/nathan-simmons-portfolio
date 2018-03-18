import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import ProjectCard from './Card.js'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
  header: {
    width: '90%',
    margin: 'auto'
  },
  container: {
    padding: 10,
    width: '90%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'spaceBetween',

  }
};

class Nav extends Component {
  constructor(props) {
  super(props);
  this.state = {
    slideIndex: 0,
  };
}

handleChange = (value) => {
  this.setState({
    slideIndex: value,
  });
};

render() {
  return (
    <div>
      <Tabs
        style={styles.header}
        onChange={this.handleChange}
        value={this.state.slideIndex}
      >
        <Tab label="Projects" value={0} />
        <Tab label="About" value={1} />
        <Tab label="Contact" value={2} />
      </Tabs>
      <SwipeableViews
        index={this.state.slideIndex}
        onChangeIndex={this.handleChange}
      >
        <div style={styles.container}>

          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
        <div style={styles.container}>
          <p>Nathan Simmons has finally found the outlet he needs to channel his visceral desire to succeed, relentless problem solving skills, passion for creating and general left/right brain cohesion. After years spent in restaurant management and playing music, he is coupling his creativity and artist eye with his experience in daily business operations, people management skills and networking. Powerful and diverse experience, combined with full stack javascript web development training, come together to create a new and unstoppable force in the development world.</p>
        </div>
        <div style={styles.slide}>
          slide n°3
        </div>
      </SwipeableViews>
    </div>
  );
}
}




export default Nav;
