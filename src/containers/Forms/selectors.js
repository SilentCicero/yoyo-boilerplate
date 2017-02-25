import { createSelector } from 'reselect';

export const selectInput = (state, mergeProps) => state.forms[mergeProps.id] || {};

export const selectValue = createSelector(
  selectInput,
  substate => substate.value || '',
);

export const selectInputValue = (state, id) => selectValue(state, { id });

export const selectForm = (state, ids) => {
  const output = {};
  ids.forEach(id => (output[id] = selectInputValue(state, id)));
  return output;
};
