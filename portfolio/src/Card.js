import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import logo from './logo.png';
class ProjectCard extends Component {


  render () {
    const cardStyle = {
      width: '300px',
      height: '300px'
    }
    const overlayStyle ={
      height: '268px'
    }
    return (

      <Card style={cardStyle}>
        {/* <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar="images/jsa-128.jpg"
        /> */}
        <CardMedia

            overlay={<CardTitle  style={overlayStyle} title="Overlay title" />}
          >
            <img src={logo} alt="" />
          </CardMedia>
          {/* <CardTitle title="Card title" subtitle="Card subtitle" /> */}
          {/* <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions> */}
        </Card>
        
    )
  }

}


export default ProjectCard;
