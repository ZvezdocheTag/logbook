/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => {
  // console.log(state, "IN SELECTOR")
  
  return state.get('travel')
};

const makeSelectLogbooks = () => {
  
return createSelector(
  selectHome,
  (homeState) => {
    console.log(homeState, "NEXT")
    // console.log(homeState, "PREV", homeState.get('userTravels'))
    return homeState.userTravels
  }
)};

const makeSelectLogbooksItem = () => createSelector(
  selectHome,
  (homeState) => {
    // console.log(homeState, "ON")
    return homeState.userTravels
  }
);


export {
  selectHome,
  makeSelectLogbooks,
  makeSelectLogbooksItem
};
