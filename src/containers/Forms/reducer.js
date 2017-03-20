import Immutable from 'seamless-immutable';

import { CHANGE_VALUE, CHANGE_ERROR, FORM_VALID } from './constants';

const inputInitialState = Immutable({});

export default function formsReducer(state = inputInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case FORM_VALID:
      return state.setIn([action.form, 'valid'], true);
    case CHANGE_ERROR:
      return state.setIn([action.form, action.id, 'error'], action.error);
    case CHANGE_VALUE:
      return state.merge({
        [action.form]: {
          valid: false,
          [action.id]: {
            touched: true,
            value: action.value,
            error: undefined,
          },
        },
      }, { deep: true });
    default:
      return state;
  }
}
