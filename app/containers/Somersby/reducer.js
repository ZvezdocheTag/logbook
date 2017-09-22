import { fromJS, List } from 'immutable';
import {
  ADD_TRAVEL,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  "currentAddedTravels": {
    userId: null,
    title: '',
    description: '',
    image: ''
  },
  supo: '',
  userTravels: List(),
  anotherTravel: []
});

function appTravelsReducer(state = initialState, action) {
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

export default appTravelsReducer;
