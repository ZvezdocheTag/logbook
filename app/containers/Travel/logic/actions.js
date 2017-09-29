
import {
  ADD_TRAVEL,
  FETCH_TRAVEL,
  FETCH_TRAVEL_SUCCESS,
  FETCH_TRAVEL_FAILURE,
  FETCH_TRAVELS,
  FETCH_TRAVELS_SUCCESS,
  FETCH_TRAVELS_FAILURE,
  CREATE_TRAVEL,
  CREATE_TRAVEL_SUCCESS,
  CREATE_TRAVEL_FAILURE,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from './constants';

import { v4 } from 'node-uuid'

import { 
  getTravels,
  sendTravel,
  sendPost
} from '../../../api'
  /**
   * Load the repositories, this action starts the request saga
   *
   * @return {object} An action object with a type of LOAD_REPOS
   */
  export function createPost(post, travelId) {
    console.log("CREATE POST")
      return {
        type: CREATE_POST,
        payload: sendPost(post, travelId)
      };
    }
    
    export function createPostSuccess(newPost) {
      console.log("CREATE POST SF")
      return {
        type: CREATE_POST_SUCCESS,
        payload: newPost
      };
    }
    
    export function createPostFailure(error) {
      return {
        type: CREATE_POST_FAILURE,
        payload: error
      };
    }
    
  export function addTravel(data) {
    return {
      type: ADD_TRAVEL,
      data: {...data, userId: v4()}
    };
  }
  export function fetchTravels(filter) {
    return {
      type: FETCH_TRAVELS,
      request: getTravels(filter)
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
    return {
      type: FETCH_TRAVEL,
      payload: getTravels(id)
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