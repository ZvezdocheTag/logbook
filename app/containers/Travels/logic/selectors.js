/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => {
  return state.get('travel')
};

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('currentAddedTravels')
);

const makeSelectLogbooks = () => {
  
return createSelector(
  selectHome,
  (homeState) => {
    console.log(homeState)
    return homeState.get('userTravels')
  }
)};

const makeSelectLogbooksItem = () => createSelector(
  selectHome,
  (homeState) => homeState.getIn(['userTravels'])
);


export {
  selectHome,
  makeSelectUsername,
  makeSelectLogbooks,
  makeSelectLogbooksItem
};
