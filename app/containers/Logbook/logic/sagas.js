/**
 * Gets the repositories of the user from Github
 */

import { 
    take, 
    call, 
    put, 
    select, 
    cancel, 
    takeLatest 
} from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { FETCH_TRAVELS } from './constants';
import { fetchTravelsSuccess, fetchTravelsFailure } from './actions';

import { 
    getTravels,
    sendTravel
  } from '../../../api'
/**
 * Github repos request/response handler
 */
console.log("SF SS")
export function* getTravelsAsync() {
  // Select username from store
//   const username = yield select(makeSelectUsername());
  
    console.log(
        "WORK"
    )
  try {
    // Call our request helper (see 'utils/request')
    const travels = yield getTravels('all');
    yield put(fetchTravelsSuccess(travels));
  } catch (err) {
    yield put(fetchTravelsFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* travelsData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(FETCH_TRAVELS, getTravelsAsync);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
    travelsData,
];
