import React, { Component } from 'react';
import './App.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import logo from './logo.png';


const styles = {
  cardStyle: {
    width: '260px',
    height: '260px',
  },
  overlayStyle: {
    width: '260px',
    height: '260px',
  }
}


class ProjectCard extends Component {

  render () {

    return (
      <div>
        {this.props.projects.map((projectObj, i)=>{
          return (<div style={styles.cardStyle}>
            <a href={projectObj.url} target="_blank">
              <article className="panel">
                <img src={projectObj.img} style={styles.overlayStyle}/>
                <section className="info">
                  {projectObj.title}
                </section>
                <section className="filter">
                </section>
              </article>
            </a>
          </div>)
        })}
      </div>
    )
  }

}


export default ProjectCard;
