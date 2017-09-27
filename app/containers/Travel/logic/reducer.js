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
} from './constants';

// The initial state of the App
const initialState = {   
userTravels: [],

travelsList: {
  travel: [], 
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

function TravelsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TRAVEL:
      return {
        ...state,
        userTravels: [...state.userTravels, action.data]
      }
    case FETCH_TRAVELS:// start fetching posts and set loading = true
      return { 
      ...state, 
      travelsList: {
        travel:[], 
        error: null, 
        loading: true
      }
    };  
  case FETCH_TRAVELS_SUCCESS:// return list of travel and make loading = false
    return { 
      ...state, 
      travelsList: {
        travel: action.payload,
        error:null, 
        loading: false
        }
      };
  case FETCH_TRAVELS_FAILURE:// return error and make loading = false
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return { 
      ...state, 
      travelsList: {
        travel: [], 
        error: error, 
        loading: false
      }
    };
  case FETCH_TRAVEL:
    return { 
      ...state, 
      activeTravel:{...state.activeTravel, loading: true}};
  case FETCH_TRAVEL_SUCCESS:
    console.log(action.payload)
    return { 
      ...state, 
      activeTravel: {
        travel: action.payload, 
        error:null, 
        loading: false
      }
    };
  case FETCH_TRAVEL_FAILURE:
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return { 
      ...state, 
      activeTravel: {
        travel: null, 
        error:error, 
        loading:false
      }
    };

  case CREATE_TRAVEL:
    
  	return {
      ...state, 
      newPost: {
        ...state.newPost, 
        loading: true
      }
    }
  case CREATE_TRAVEL_SUCCESS:
    const travelsList = state.travelsList.travel

  	return {
      ...state, 
      newTravel: {
        post:action.payload, 
        error:null, 
        loading: false
      },
      travelsList: {
        travel: [...travelsList, action.payload]
      }
    }
  case CREATE_TRAVEL_FAILURE:
    error = action.payload || 
    { 
      message: action.payload.message
    };//2nd one is network or server down errors
  	return {
      ...state, 
      newTravel: {
        post:null, 
        error:error, 
        loading: false
      }
    }

  default:
    return state;
  }
}


export default TravelsReducer;
