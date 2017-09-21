import { fromJS } from 'immutable';
import {
  ADD_TRAVEL,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  currentAddedTravels: {
    userId: null,
    title: '',
    description: '',
    image: ''
  },
  userTravels: [],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
