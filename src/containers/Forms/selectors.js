import { createSelector } from 'reselect';

export const nullInput = {
  value: '',
  touched: false,
};

export const selectInput = (state, mergeProps) => state.forms[mergeProps.id] || nullInput;

export const selectValue = createSelector(
  selectInput,
  substate => substate.value || '',
);

export const selectInputValue = (state, id) => selectValue(state, { id });

export const selectFormValues = (state, ids) => {
  const output = {};
  ids.forEach(id => (output[id] = selectInputValue(state, id)));
  return output;
};

export const selectError = createSelector(
  selectInput,
  substate => substate.error || '',
);

export const selectInputError = (state, id) => selectError(state, { id });

export const selectFormErrors = (state, ids) => {
  const output = {};
  ids.forEach(id => (output[id] = selectInputError(state, id)));
  return output;
};

export const selectForm = (state, ids) => {
  const output = {};
  ids.forEach(id => (output[id] = selectInput(state, { id })));
  return output;
};

export const selectLatestFormError = (state, ids) => {
  let error = {};
  ids.forEach((id) => {
    const inputError = selectError(state, { id });
    error = inputError === '' ? error : { id, error: inputError };
  });
  return error;
};
