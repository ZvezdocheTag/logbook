import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'

const style = {
  'marginBottom': '30px'
}

const Post = (props) => (
  <Card style={style}>
    <CardMedia style={{ maxHeight: "360px", overflow: 'hidden'}}>
      <img src={props.item.img} alt="" />
    </CardMedia>
    {typeof props.item.travelId !== "undefined" ? 
    <Link style={{textDecoration: 'none'}} to={`/post/${props.item.travelId}/${props.item.id}`}> 
      <CardTitle title={props.item.name}
      titleStyle={{
        color: '#00bcd4',
        fontSize: '36px'
      }}/>
    </Link> :
    <CardTitle title={props.item.name}/> 
    }
    <CardText>
      {props.item.description}
    </CardText>
    <CardActions>
      <h4 className="card-subtitle">Coordinate</h4>
      <ul className="coordinate">
          {
            props.item.coordinate.hasOwnProperty('1') ?
            [props.item.coordinate['1'], props.item.coordinate['2']].map((item, i, arr) => {
              return (
              <li className="coordinate__item" key={i}>
                <IconLocationOn 
                  style={{
                    fill: '#525151',
                    position: 'absolute',
                    left: 0}}
                  />
                <div 
                    className="coordinate__value value--longtitude"
                >
                {item[`travel-lng-${i+1}`]}
                </div>
                <div 
                    className="coordinate__value value--latitude"
                >
                {item[`travel-lat-${i+1}`]}
                </div>
          </li>  
            )
            }): (
              <li className="coordinate__item">
          
                <IconLocationOn 
                  style={{
                    fill: '#525151',
                    position: 'absolute',
                    left: 0}}
                  />
                <div 
                    className="coordinate__value value--longtitude"
                >
                {props.item.coordinate["travel-lng-1"]}
                </div>
                <div 
                    className="coordinate__value value--latitude"
                >
                {props.item.coordinate["travel-lat-1"]}
                </div>
          </li> 
            )

            
          }
  
      </ul>
    </CardActions>
  </Card>
);


export default Post;