/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
// import { isKeyed, Map, List,isIndexed, Stack } from 'immutable';

const selectGlobal = (state) => state;

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => {
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
    return globalState.get("travel")
  }
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route');

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
