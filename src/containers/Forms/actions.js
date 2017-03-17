import { CHANGE_VALUE, CHANGE_ERROR, VALIDATE_FORM } from './constants';

export function changeValue(e, mergeProps) {
  const nullMethod = () => {};
  (mergeProps.onchange || nullMethod)(e);
  const targetValue = e.target.value;
  const isCheckbox = ['checkbox', 'radio'].indexOf((mergeProps.type || '')) !== -1;
  const checkedValue = isCheckbox ? e.target.checked : targetValue;

  return {
    type: CHANGE_VALUE,
    id: mergeProps.id,
    form: mergeProps.form || 'default',
    validators: mergeProps.validators || [],
    value: (typeof targetValue === 'string' ? checkedValue : (mergeProps.value || '')),
  };
}

export function changeError(mergeProps, error) {
  return {
    type: CHANGE_ERROR,
    id: mergeProps.id,
    form: mergeProps.form || 'default',
    error,
  };
}

function validateForm(form) {
  return {
    type: VALIDATE_FORM,
    form,
  };
}
