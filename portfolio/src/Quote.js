import React, {Component} from 'react';
import Flexbox from 'flexbox-react';
import './App.css';

const styles = {
  text: {
    color: '#EF5743',
  }
}

class Quote extends Component {

  render() {
    return (
    <Flexbox flexDirection="row" justifyContent="center">
      <div style={styles.text}>{this.props.joke[0]} - Ron Swanson</div>
    </Flexbox>

    );
  }
}

export default Quote;
