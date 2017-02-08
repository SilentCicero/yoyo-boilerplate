import { createSelector } from 'reselect';

export const selectRoute = state => state.route;

export const selectCurrentLocation = createSelector(
  selectRoute,
  routerState => routerState.location,
);
