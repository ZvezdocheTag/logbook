import React from 'react';

import CircularProgressExampleSimple from 'components/LoaderList';
import TravelCard from 'components/TravelCard';




const TravelCardItem = (props) => {
  if(typeof props.travel === "undefined") {
    return (<div>No travels </div>)
  } else if(!props.loading && props.travel !== null) {
    return <TravelCard item={props.travel}/> 
  } else if(props.loading){
    return <CircularProgressExampleSimple />
  } else {
    return (<div>No travels </div>)
  }
}



export default TravelCardItem;