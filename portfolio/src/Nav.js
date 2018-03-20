import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import ProjectCard from './Card.js'
import restPic from './restdemo2.png';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  slide: {
    padding: 10
  },
  header: {

    width: '90%',
    margin: 'auto',

  },
  border: {
    height: 46,
    width: '20%',
    borderBottom: '2px solid #EF5743',
    background: 'ghostwhite'
  },
  bodyContainer: {
    padding: 10,
    width: '90%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'spaceBetween'
  },
  navContainer: {
    display: 'flex',
  },
  navTabs: {
    background: 'ghostwhite',
    color: '#02BEC4',
  }
};

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {title: 'Rest Demo',
          url: 'https://nathanhbsimmons.github.io/checkpoints/cpoint1/cpoint1.html',
          img: restPic},
      ],
      slideIndex: 0
    };
  }

  handleChange = (value) => {
    this.setState({slideIndex: value});
  };

  render() {
    return (<div>
      <div style={styles.navContainer}>
      <div style={styles.border}></div>
      <Tabs style={styles.header} onChange={this.handleChange} value={this.state.slideIndex}>

        <Tab style={styles.navTabs} label="Projects" value={0}/>
        <Tab style={styles.navTabs} label="About" value={1}/>
        <Tab style={styles.navTabs} label="Contact" value={2}/>

      </Tabs>
      <div style={styles.border}></div>
      </div>

        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
          <div style={styles.bodyContainer}>
            <ProjectCard projects={this.state.projects}/>

          </div>
          <div style={styles.bodyContainer}>
            <p>Nathan Simmons has finally found the outlet he needs to channel his visceral desire to succeed, relentless problem solving skills, passion for creating and general left/right brain cohesion. After years spent in restaurant management and playing music, he is coupling his creativity and artist eye with his experience in daily business operations, people management skills and networking. Powerful and diverse experience, combined with full stack javascript web development training, come together to create a new and unstoppable force in the development world.</p>
          </div>
          <div style={styles.slide}>
            slide n°3
          </div>
        </SwipeableViews>


    </div>);
  }
}

export default Nav;
