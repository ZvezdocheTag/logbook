import {
    ADD_TRAVEL,
    FETCH_POST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE,
    CREATE_POST,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
} from './constants';
import { v4 } from 'node-uuid'


export function createPost(props, tokenFromStorage) {

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function createPostSuccess(newPost) {
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

export function fetchPost(id) {
  return {
    type: FETCH_POST,
    payload: request
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
    
  