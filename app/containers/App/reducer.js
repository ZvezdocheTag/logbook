/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS, List } from 'immutable';

import {
  FETCH_TRAVELS,
  FETCH_TRAVELS_SUCCESS,
  FETCH_TRAVELS_FAILURE,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from './constants';
import auth from '../../utils/auth'
// The initial state of the App

const initialState = {  

  userTravels: [],
  loading: false,
  error: false,
  currentUser: false,
  travelsList: {
    travels: [], 
    error: null, 
    loading: false
  }, 
  
  newTravel: {
    travel: null, 
    error: null, 
    loading: false
  }, 
  
  activeTravel: {
    travel: null, 
    error: null, 
    loading: false
  }, 
  };
  
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}


