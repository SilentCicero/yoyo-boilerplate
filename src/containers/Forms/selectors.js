import { createSelector } from 'reselect';

export const nullInput = {
  value: '',
  touched: false,
};

export const selectOnlyForm = (state, form) => state.forms[form] || {};

export const selectOnlyInput = (state, form, id) => selectOnlyForm(state, form)[id] || {};

export const selectFormValid = (state, form) => selectOnlyForm(state, form).valid || false;

export const selectInputValue = (state, form, id) => selectOnlyInput(state, form, id).value || '';

export const selectInputError = (state, form, id) => selectOnlyInput(state, form, id).error || undefined;
