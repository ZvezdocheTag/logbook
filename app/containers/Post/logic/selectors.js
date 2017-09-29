/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state

const makeSelectTravels = () => createSelector(
  selectHome,
  (homeState) => homeState.get('travel')
);

const makeSelectActivePost = () => createSelector(
  selectHome,
  (homeState) => homeState.get('activePost')
);


export {
  selectHome,
  makeSelectTravels,
  makeSelectActivePost
};
