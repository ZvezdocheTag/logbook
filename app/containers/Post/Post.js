import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const style = {
  'marginBottom': '30px'
}
const Post = (props) => (
  <Card style={style}>
    <CardMedia>
      <img src={props.item.img} alt="" />
    </CardMedia>
    <Link to={`/post/${props.item.id}`}>
      <CardTitle title={props.item.name}/>
    </Link>
    <CardText>
      {props.item.description}
    </CardText>
    <CardActions>
      <h4>Coordinate</h4>
      <ul className="coordinate">
          <li className="coordinate__item">
                <div 
                    className="coordinate__value value--longtitude"
                >
                {props.item.coordinate.longitude}
                </div>
                <div 
                    className="coordinate__value value--latitude"
                >
                {props.item.coordinate.latitude}
                </div>
          </li>   
      </ul>
    </CardActions>
  </Card>
);


export default Post;