
import {
  FETCH_TRAVEL,
  FETCH_TRAVEL_SUCCESS,
  FETCH_TRAVEL_FAILURE,
  CREATE_TRAVEL,
  CREATE_TRAVEL_SUCCESS,
  CREATE_TRAVEL_FAILURE,
} from './constants';
import { v4 } from 'node-uuid'

import { 
  getTravels,
  sendTravel
} from '../../../api'

  export function createTravel(props) {
    return {
      type: CREATE_TRAVEL,
      payload: sendTravel({...props, userId: v4()})
    };
  }
  
  export function createTravelSuccess(newTravel) {
    return {
      type: CREATE_TRAVEL_SUCCESS,
      payload: newTravel
    };
  }
  
  export function createTravelFailure(error) {
    return {
      type: CREATE_TRAVEL_FAILURE,
      payload: error
    };
  }
  
  export function fetchTravel(id) {
    const request = axios.get(`${ROOT_URL}/travels/${id}`);
  
    return {
      type: FETCH_TRAVEL,
      payload: request
    };
  }
  
  export function fetchTravelSuccess(activeTravel) {
    return {
      type: FETCH_TRAVEL_SUCCESS,
      payload: activeTravel
    };
  }
  
  export function fetchTravelFailure(error) {
    return {
      type: FETCH_TRAVEL_FAILURE,
      payload: error
    };
  }