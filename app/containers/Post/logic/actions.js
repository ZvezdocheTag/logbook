import {
    ADD_TRAVEL,
    FETCH_POST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE,
    CREATE_POST,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
    VALIDATE_POST_FIELDS,
    VALIDATE_POST_FIELDS_SUCCESS,
    VALIDATE_POST_FIELDS_FAILURE,
} from './constants';
import axios from 'axios';
import { v4 } from 'node-uuid'

export function validatePostFields(props) {
  //note: we cant have /posts/validateFields because it'll match /posts/:id path!
  const request = axios.post(`${ROOT_URL}/posts/validate/fields`, props);

  return {
    type: VALIDATE_POST_FIELDS,
    payload: request
  };
}

export function validatePostFieldsSuccess() {
  return {
    type: VALIDATE_POST_FIELDS_SUCCESS
  };
}

export function validatePostFieldsFailure(error) {
  return {
    type: VALIDATE_POST_FIELDS_FAILURE,
    payload: error
  };
}


export function createPost(props, tokenFromStorage) {
  const request = axios({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/posts`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  });

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
  const request = axios.get(`${ROOT_URL}/posts/${id}`);

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
    
  