import {
    FETCH_POST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE,
} from './constants';
import { 
  getPost,
} from '../../../api'
export function fetchPost(id, travelId) {
  return {
    type: FETCH_POST,
    payload: getPost(id, travelId)
  };
}


export function fetchPostSuccess(activePost) {
  return {
    type: FETCH_POST_SUCCESS,
    payload: activePost
  };
}

export function fetchPostFailure(error) {
  return {
    type: FETCH_POST_FAILURE,
    payload: error
  };
}
    
  