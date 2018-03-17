import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

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
        <div>
          <h2 style={styles.headline}>Tabs with slide effect</h2>
          Swipe to see the next slide.<br />
        </div>
        <div style={styles.slide}>
          <p> Lorem</p>
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
