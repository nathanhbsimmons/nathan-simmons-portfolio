import React, {Component} from 'react';
import './App.css';
import Nav from './Nav.js'
import Header from './Header.js'
import Footer from './Footer.js'
import Quote from './Quote.js'
import restPic from './restdemo2.png'
import checkers from './checkers.png'
import guitar from './guitarPlayer.png'
import logoCrop from './logoCrop.png'
import profile from './profile.png'
import map from './map.png'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: 'Node Checkers',
          url: 'https://www.npmjs.com/package/nodecheckers',
          img: checkers
        }, {
          title: 'Clicker Game',
          url: 'https://nathanhbsimmons.github.io/nathanhbsimmons.github.io/checkpoints/cpoint3/index.html',
          img: guitar
        }, {
          title: 'Swimming Hole App',
          url: 'https://github.com/nathanhbsimmons/finalproject/blob/master/swimmingholeapp/src/App.js',
          img: map
        } 
      ],
      slideIndex: 0,
      isLoaded: false,
      error: null,
      joke: [],
      fade: logoCrop
    };
  }

  componentDidMount() {
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(res => res.json()).then((res) => {
      this.setState({isLoaded: true, joke: res});
    }, (error) => {
      this.setState({isLoaded: true, error});
    })
  }

  handleChange = (value) => {
    this.setState({slideIndex: value});
    if (value === 1) {
      this.setState({fade: profile})
    } else {
      this.setState({fade: logoCrop})
    }
  };

  render() {
    return (<div className="App">

      <Header fade={this.state.fade}/>

      <Nav projects={this.state.projects}
        handleChange={(value) => {this.handleChange(value)}}
        slideIndex={this.state.slideIndex}/>

      <Footer/>

      <Quote joke={this.state.joke}/>

    </div>);
  }
}

export default App;
