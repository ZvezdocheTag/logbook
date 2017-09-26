/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
// import { isKeyed, Map, List,isIndexed, Stack } from 'immutable';

const selectGlobal = (state) => state;

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => {
    // console.log(globalState, "GLOBAL STATE", globalState.get('currentUser'))
    return globalState.currentUser
  }
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loading
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.error
);

const makeSelectTravels = () => createSelector(
  selectGlobal,
  (globalState) => {
    // console.log(globalState.get("travel"),globalState, "GLOB")
    return globalState.get("global")
  }
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocationState,
  makeSelectTravels
};
