import yo from 'fro-yo';

import { connect } from 'store';
import { changeValue } from './actions';
import { selectValue } from './selectors';
import { assignValidators } from './validators';

function noChildren(props) {
  return Object.assign({}, props, { children: '' });
}

function InputWrapper(props) {
  assignValidators(props);

  return yo`<span><input ${noChildren(props)} /></span>`;
}

function TextareaWrapper(props) {
  assignValidators(props);

  return yo`<textarea ${noChildren(props)} />${props.value || ''}</textarea>`;
}

function SelectWrapper(props) {
  assignValidators(props);

  return yo`<span><select ${noChildren(props)}>${props.children.map((c) => {
    if (typeof props.autoselect !== 'undefined' && c.value === props.selected) {
      return yo`<option value=${c.value} selected="selected">${c.innerHTML}</option>`;
    } else if (c.value && props.selected !== '') {
      return yo`<option value=${c.value}>${c.innerHTML}</option>`;
    }

    return c;
  })}</select></span>`;
}

export function mapKeyUpDispatchToProps(dispatch, mergeProps) {
  return {
    onchange: e => dispatch(changeValue(e, mergeProps)),
    onkeyup: e => dispatch(changeValue(e, mergeProps)),
  };
}

export function mapInputStateToProps(state, mergeProps) {
  return {
    selected: selectValue(state, mergeProps),
  };
}

export const Input = connect(null, mapKeyUpDispatchToProps)(InputWrapper);
export const Select = connect(mapInputStateToProps, mapKeyUpDispatchToProps)(SelectWrapper);
export const Textarea = connect(null, mapKeyUpDispatchToProps)(TextareaWrapper);
