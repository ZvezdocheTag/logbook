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
    <Link to={`/travel/${props.item.id}`}>
      <CardTitle title={props.item.name}/>
    </Link>
    <CardText>
      {props.item.description}
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
    </CardActions>
  </Card>
);


export default MaterialCard;