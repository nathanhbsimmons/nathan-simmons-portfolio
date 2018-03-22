import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import ProjectCard from './Card.js';



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
    marginTop: 10,
  },
  border: {
    height: 46,
    width: '20%',
    borderBottom: '2px solid #EF5743',
    background: 'ghostwhite',
    marginTop: 10,
  },
  bodyContainer: {
    maxHeight: 300,
    padding: 40,
    width: '90%',
    margin: 'auto',
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




  render() {
    return (<div>
      <div style={styles.navContainer}>
      <div style={styles.border}></div>
      <Tabs style={styles.header} onChange={(value)=>{this.props.handleChange(value)}} value={this.props.slideIndex}>

        <Tab style={styles.navTabs} label="Projects" value={0}/>
        <Tab style={styles.navTabs} label="About" value={1}/>
        <Tab style={styles.navTabs} label="Contact" value={2}/>

      </Tabs>
      <div style={styles.border}></div>
      </div>

        <SwipeableViews index={this.props.slideIndex} onChangeIndex={(value)=>{this.props.handleChange(value)}}>
          <div  style={styles.bodyContainer}>
            <ProjectCard  projects={this.props.projects}/>
          </div>

          <div style={styles.bodyContainer}>
            <p>Nathan Simmons has finally found the outlet he needs to channel his visceral desire to succeed, relentless problem solving skills, passion for creating and general left/right brain cohesion. After years spent in restaurant management and playing music, he is coupling his creativity and artist eye with his experience in daily business operations, people management skills and networking. Powerful and diverse experience, combined with full stack javascript web development training, come together to create a new and unstoppable force in the development world.</p>
            {/* <p>{this.state.joke}</p> */}
          </div>

          <div style={styles.slide}>
            slide n°3
          </div>
        </SwipeableViews>

    </div>);
  }
}

export default Nav;
