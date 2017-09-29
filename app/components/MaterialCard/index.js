import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const style = {
  'marginBottom': '30px'
}
const MaterialCard = (props) => (
  <Card style={style}>
    <CardHeader
      title="URL Avatar"
      avatar="images/jsa-128.jpg"
    />
    <CardMedia>
      <img src={props.item.img} alt="" />
    </CardMedia>
    <Link to={`/travel/${props.item.id}`} 
    style={{textDecoration: 'none'}}>
      <CardTitle 
      title={props.item.name}
      titleStyle={{
        color: '#00bcd4',
        fontSize: '36px'
      }}
       />
    </Link>
    <CardText>
      {props.item.description}
    </CardText>
  </Card>
);


export default MaterialCard;