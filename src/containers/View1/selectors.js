import { createSelector } from 'reselect';

export const selectRoute = state => state.route;

export const selectParams = state => (state || {}).params || {};

export const selectUsername = state => selectParams(state).username || 'Unknown';

export const selectCurrentLocation = createSelector(
  selectRoute,
  routerState => routerState.location,
);
