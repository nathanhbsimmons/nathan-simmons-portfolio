import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import fetch from 'unfetch';
import Nav from './Nav.js'
import Header from './Header.js'
import Footer from './Footer.js'
import restPic from './restdemo2.png';
import checkers from './checkers.png';
import guitar from './guitarPlayer.png'
import logoCrop from './logoCrop.png'
import profile from './profile.png'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {title: 'Rest Demo',
          url: 'https://nathanhbsimmons.github.io/checkpoints/cpoint1/cpoint1.html',
          img: restPic},
        {title: 'Node Checkers',
          url: 'https://github.com/nathanhbsimmons/javascript-workbook/blob/gh-pages/05week/checkers.js',
          img: checkers},
        {title: 'Clicker Game',
          url: 'https://nathanhbsimmons.github.io/nathanhbsimmons.github.io/checkpoints/cpoint3/index.html',
          img: guitar}
      ],
      slideIndex: 0,
      isLoaded: false,
      error: null,
      joke:'',
      fade: logoCrop,
    };
  }

  componentDidMount() {
    console.log('mount')
   fetch("https://icanhazdadjoke.com/",

   {method: "GET", headers: "Accept: text/plain"}
  )
     .then(res => res.json())
     .then(

       (result) => {
           console.log(result)
         this.setState({
           isLoaded: true,
           joke: result
         });
       },
       // Note: it's important to handle errors here
       // instead of a catch() block so that we don't swallow
       // exceptions from actual bugs in components.
       (error) => {
         this.setState({
           isLoaded: true,
           error
         });
       }
     )
  }


  handleChange = (value) => {
    this.setState({slideIndex: value});
    if(value === 1){
      this.setState({
        fade: profile,
      })
      } else {
        this.setState({
          fade: logoCrop,
        })
      }
  };

  render() {
    return (<div className="App">

      <MuiThemeProvider>
        <Header fade={this.state.fade}/>
        </MuiThemeProvider>

          <MuiThemeProvider>
        <Nav projects={this.state.projects} handleChange={(value)=>{this.handleChange(value)}} slideIndex={this.state.slideIndex}/>
        </MuiThemeProvider>

          <MuiThemeProvider>
        <Footer/>
      </MuiThemeProvider>

    </div>);
  }
}

export default App;
