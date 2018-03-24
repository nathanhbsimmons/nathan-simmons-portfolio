import React, { Component } from 'react';
import './App.css';
import Flexbox from 'flexbox-react';



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
            <a key={i} href={projectObj.url} target="_blank" rel="noopener noreferrer">
              <article className="panel">
                <img src={projectObj.img} style={styles.overlayStyle} alt={projectObj.title}/>
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
