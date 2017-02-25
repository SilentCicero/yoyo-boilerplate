import { CHANGE_VALUE } from './constants';

export function changeValue(e, mergeProps) {
  const nullMethod = () => {};
  (mergeProps.onchange || nullMethod)(e);
  const value = e.target.value;
  const isCheckbox = ['checkbox', 'radio'].indexOf((mergeProps.type || '')) !== -1;
  const checkedValue = isCheckbox ? e.target.checked : value;

  return mergeProps.id ? {
    type: CHANGE_VALUE,
    id: mergeProps.id,
    value: (typeof value === 'string' ? checkedValue : (mergeProps.value || '')),
  } : {};
}
