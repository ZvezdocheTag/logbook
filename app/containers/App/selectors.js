/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
// import { isKeyed, Map, List,isIndexed, Stack } from 'immutable';

const selectGlobal = (state) => {
  const that = state.get('global').get("that");
  console.log(that, "ST G" )
  return state.get('global')
};

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => {
    // console.log(globalState, "GLOBAL STATE", globalState.get('currentUser'))
    return globalState.get('currentUser')
  }
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectRepos = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'repositories'])
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

const makeSelectTravels = () => {

}

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocationState,
};
