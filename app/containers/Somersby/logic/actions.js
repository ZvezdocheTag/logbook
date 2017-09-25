
import {
  ADD_TRAVEL,
  FETCH_TRAVELS,
  FETCH_TRAVELS_SUCCESS,
  FETCH_TRAVELS_FAILURE,
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

  const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';
  export function fetchTravels() {
    const request = axios({
      method: 'get',
      url: `${ROOT_URL}/travels`,
      headers: []
    });
  
    return {
      type: FETCH_TRAVELS,
      payload: request
    };
  }
      
  export function fetchTravelsSuccess(travels) {
    return {
      type: FETCH_TRAVELS_SUCCESS,
      payload: travels
    };
  }
  
  export function fetchTravelsFailure(error) {
    return {
      type: FETCH_TRAVELS_FAILURE,
      payload: error
    };
  }
  
  export function validateTravelFields(props) {
    //note: we cant have /travels/validateFields because it'll match /travels/:id path!
    const request = axios.post(`${ROOT_URL}/travels/validate/fields`, props);
  
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
  
  
  export function createTravel(props, tokenFromStorage) {
    const request = axios({
      method: 'post',
      data: props,
      url: `${ROOT_URL}/travels`,
      headers: {
        'Authorization': `Bearer ${tokenFromStorage}`
      }
    });
  
    return {
      type: CREATE_TRAVEL,
      payload: request
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