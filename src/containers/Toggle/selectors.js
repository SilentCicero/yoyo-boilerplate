import Immutable from 'seamless-immutable';
import { createSelector } from 'reselect';

import { CLOSED_STATUS, OPEN_STATUS } from './constants';

export const nullToggleSelection = Immutable({
  status: CLOSED_STATUS,
});

export const selectToggles = state => state.toggles || state;

export const selectToggle = (state, props) => selectToggles(state)[props.name] || nullToggleSelection;

export const selectToggleStatus = createSelector(
  selectToggle,
  toggleState => toggleState.status,
);

export const selectToggleStatusInverse = createSelector(
  selectToggle,
  toggleState => (toggleState.status === OPEN_STATUS ? CLOSED_STATUS : OPEN_STATUS),
);
