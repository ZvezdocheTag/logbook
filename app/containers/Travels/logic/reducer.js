import { fromJS, List } from 'immutable';

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

// The initial state of the App
const initialState = fromJS({   
userTravels: List(),

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
});

function TravelsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TRAVEL:
      console.log(action.data)
      return state.updateIn(['userTravels'], 
        list => list.push(action.data))
    // case ADD_TRAVEL:
    //   return state.set('currentAddedTravels', action.data)
    case FETCH_TRAVELS:// start fetching posts and set loading = true
  	return { 
      ...state, 
      postsList: {
        posts:[], 
        error: null, 
        loading: true
      }
    }; 
  case FETCH_TRAVELS_SUCCESS:// return list of posts and make loading = false
    return { 
      ...state, 
      postsList: {
        posts: action.payload,
        error:null, 
        loading: false
        }
      };
  case FETCH_TRAVELS_FAILURE:// return error and make loading = false
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return { 
      ...state, 
      postsList: {
        posts: [], 
        error: error, 
        loading: false
      }
    };

  case FETCH_TRAVEL:
    return { 
      ...state, 
      activePost:{...state.activePost, loading: true}};
  case FETCH_TRAVEL_SUCCESS:
    return { 
      ...state, 
      activePost: {
        post: action.payload, 
        error:null, 
        loading: false
      }
    };
  case FETCH_TRAVEL_FAILURE:
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return { 
      ...state, 
      activePost: {
        post: null, 
        error:error, 
        loading:false
      }
    };

  case CREATE_TRAVEL:
    console.log(state, "CREATE")
    return state
  	// return {
    //   ...state, 
    //   newPost: {
    //     ...state.newPost, 
    //     loading: true
    //   }
    // }
  case CREATE_TRAVEL_SUCCESS:
  	return {
      ...state, 
      newPost: {
        post:action.payload, 
        error:null, 
        loading: false
      }
    }
  case CREATE_TRAVEL_FAILURE:
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

  case VALIDATE_TRAVEL_FIELDS:
    return {
      ...state, 
      newPost: {
        ...state.newPost, 
        error: null, 
        loading: true
      }
    }
  case VALIDATE_TRAVEL_FIELDS_SUCCESS:
    return {
      ...state, 
      newPost: {
        ...state.newPost, 
        error: null, 
        loading: false
      }
    }
  case VALIDATE_TRAVEL_FIELDS_FAILURE:
    let result = action.payload;
    if(!result) {
      error = {
        message: action.payload.message
      };
    } else {
      error = {
        title: result.title, 
        categories: result.categories, 
        description: result.description
      };
    }
    return {
      ...state, 
      newPost: {
        ...state.newPost, 
        error: error, 
        loading: false
      }
    }
  default:
    return state;
  }
}


export default TravelsReducer;
