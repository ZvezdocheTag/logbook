import {
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from './constants';

const initialState = { 
    post:null, 
    error:null, 
    loading: false,
};

export default function activePost(state = initialState, action) {
  let error;
  switch(action.type) {
  case FETCH_POST:
    return { 
      ...state,
      loading: true
    };
  case FETCH_POST_SUCCESS:
    return { 
      ...state,
        post: action.payload, 
        error:null, 
        loading: false
    };
  case FETCH_POST_FAILURE:
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return { 
      ...state, 
        post: null, 
        error:error, 
        loading:false
    };

  default:
    return state;
  }
}


