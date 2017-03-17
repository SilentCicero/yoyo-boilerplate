import { createSelector } from 'reselect';

export const selectTime = state => state.time;

export const selectCurrentTime = createSelector(
  selectTime,
  substate => substate.current,
);
