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
currentAddedTravels: {
  userId: null,
  title: '',
  description: '',
  image: ''
},
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
      return state.updateIn(['userTravels'], 
        list => list.push(action.data))
    // case ADD_TRAVEL:
    //   return state.set('currentAddedTravels', action.data)
    default:
      return state;
  }
}

export default TravelsReducer;
