/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state;

const makeSelectLogbooks = () => {
  
return createSelector(
  selectHome,
  (homeState) => homeState.get('travel').userTravels
)};

const selectTravels = () => createSelector(
  selectHome,
  (travelState) => travelState.get('travel')
)

export {
  selectHome,
  makeSelectLogbooks,
  selectTravels
};
