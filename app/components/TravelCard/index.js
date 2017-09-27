import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const TravelCard = (props) => (
    <Card>
      <CardMedia>
        <img src={props.item.img} alt="" />
      </CardMedia>
      <CardTitle title={props.item.name}/>
      <CardText>
      {props.item.description}
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
      </CardActions>
    </Card>
  );
  
export default TravelCard;