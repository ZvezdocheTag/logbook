import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MaterialCard from 'components/MaterialCard';
import List from 'components/List';
import CircularProgressExampleSimple from 'components/LoaderList'


const TravelsList = (props) => {
    const { 
      loading, 
      travel 
    } = props.travels;
    const condition = typeof travel !== "undefined" ? 
                      !!travel.length : 
                      false;

    if(!loading && condition) {
      return (<List 
        component={MaterialCard} 
        items={travel}></List>)
    } else {
      return <CircularProgressExampleSimple />
    }
  }

export default TravelsList;