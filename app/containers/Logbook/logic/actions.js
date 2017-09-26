
import {
  ADD_TRAVEL,
  FETCH_TRAVEL,
  FETCH_TRAVEL_SUCCESS,
  FETCH_TRAVEL_FAILURE,
  CREATE_TRAVEL,
  CREATE_TRAVEL_SUCCESS,
  CREATE_TRAVEL_FAILURE,
  VALIDATE_TRAVEL_FIELDS,
  VALIDATE_TRAVEL_FIELDS_SUCCESS,
  VALIDATE_TRAVEL_FIELDS_FAILURE,
} from './constants';
import axios from 'axios';
import { v4 } from 'node-uuid'

import { 
  getTravels,
  sendTravel
} from '../../../api'
  /**
   * Load the repositories, this action starts the request saga
   *
   * @return {object} An action object with a type of LOAD_REPOS
   */
  export function addTravel(data) {
    return {
      type: ADD_TRAVEL,
      data: {...data, userId: v4()}
    };
  }

  // when i was dispatch this action I should past in payload my fake api promise
  export function validateTravelFields(props) {
    //note: we cant have /travels/validateFields because it'll match /travels/:id path!
    return {
      type: VALIDATE_TRAVEL_FIELDS,
      payload: request
    };
  }
  
  export function validateTravelFieldsSuccess() {
    return {
      type: VALIDATE_TRAVEL_FIELDS_SUCCESS
    };
  }
  
  export function validateTravelFieldsFailure(error) {
    return {
      type: VALIDATE_TRAVEL_FIELDS_FAILURE,
      payload: error
    };
  }
  
  export function createTravel(props) {
    return {
      type: CREATE_TRAVEL,
      payload: sendTravel(props)
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