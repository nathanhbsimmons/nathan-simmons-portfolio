import React, { Component } from 'react';
import './App.css';
import Flexbox from 'flexbox-react';
import logo from './logo.png';


const styles = {
  cardStyle: {
    width: 260,
    maxHeight: 260

  },
  overlayStyle: {
    width: '260px',
    height: '260px',
  }
}


class ProjectCard extends Component {

  render () {

    return (


        <Flexbox flexDirection="row" justifyContent="space-around">
        {this.props.projects.map((projectObj, i)=>{
          return (
            <a  href={projectObj.url} target="_blank">
              <article className="panel">
                <img src={projectObj.img} style={styles.overlayStyle}/>
                <section className="info">
                  {projectObj.title}
                </section>
                <section className="filter">
                </section>
              </article>
            </a>

          )
        })}
      </Flexbox>

    )
  }

}


export default ProjectCard;
