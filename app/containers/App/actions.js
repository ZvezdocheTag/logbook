/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_TRAVELS,
  FETCH_TRAVELS_SUCCESS,
  FETCH_TRAVELS_FAILURE,
} from './constants';

import { 
  getTravels
} from '../../api'

/*
 * Actions describe changes of state in your application
 */

// We import constants to name our actions' type
export function fetchTravels(filter) {
  return {
    type: FETCH_TRAVELS,
    request: getTravels(filter)
  };
}
  
export function fetchTravelsSuccess(travels) {
console.log("SU")
return {
  type: FETCH_TRAVELS_SUCCESS,
  payload: travels
};
}

export function fetchTravelsFailure(error) {
console.log("ER")
return {
  type: FETCH_TRAVELS_FAILURE,
  payload: error
};
}


export function fetchPosts() {
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
    
export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  };
}

export function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  };
}
