import {
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from './constants';

const initialState = { 
  postsList: {
    posts: [], 
    error:null, 
    loading: false
  }, 

  newPost: {
    post:null, 
    error: null, 
    loading: false
  }, 

  activePost: {
    post:null, 
    error:null, 
    loading: false
  }, 
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
  case FETCH_POST:
    return { 
      ...state, 
      activePost:{...state.activePost, loading: true}};
  case FETCH_POST_SUCCESS:
    return { 
      ...state, 
      activePost: {
        post: action.payload, 
        error:null, 
        loading: false
      }
    };
  case FETCH_POST_FAILURE:
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return { 
      ...state, 
      activePost: {
        post: null, 
        error:error, 
        loading:false
      }
    };
  case RESET_ACTIVE_POST:
    return { 
      ...state, 
      activePost: {
        post: null, 
        error:null, 
        loading: false
      }
    };

  case CREATE_POST:
  	return {
      ...state, 
      newPost: {
        ...state.newPost, 
        loading: true
      }
    }
  case CREATE_POST_SUCCESS:
  	return {
      ...state, 
      newPost: {
        post:action.payload, 
        error:null, 
        loading: false
      }
    }
  case CREATE_POST_FAILURE:
    error = action.payload || 
    { 
      message: action.payload.message
    };//2nd one is network or server down errors
  	return {
      ...state, 
      newPost: {
        post:null, 
        error:error, 
        loading: false
      }
    }

  default:
    return state;
  }
}


