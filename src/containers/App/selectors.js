import { createSelector } from 'reselect';

export const selectRoute = state => state.route;

export const selectLanguage = state => state.language;

export const selectLocale = createSelector(
  selectLanguage,
  laguageState => laguageState.locale,
);

export const selectCurrentLocation = createSelector(
  selectRoute,
  routerState => routerState.location,
);
