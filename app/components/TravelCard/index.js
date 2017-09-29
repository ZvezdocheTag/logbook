import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  marginBottom: '40px'
}
const titles = {
  fontSize: "40px",
  fontFamily: 'Roboto, sans-serif'
}
const TravelCard = (props) => (
    <Card style={style}>
      <CardMedia>
        <img src={props.item.img} alt="" />
      </CardMedia>
      <CardTitle style={titles}>
        {props.item.name}
      </CardTitle>
      <CardText>
      {props.item.description}
      </CardText>
    </Card>
  );
  
export default TravelCard;