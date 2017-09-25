import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const MaterialCard = () => (
  <Card>
    <CardHeader
      title="URL Avatar"
      avatar="images/jsa-128.jpg"
    />
    <CardMedia>
      <img src="images/nature-600-337.jpg" alt="" />
    </CardMedia>
    <CardTitle title="Card title"/>
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
    </CardActions>
  </Card>
);


export default MaterialCard;