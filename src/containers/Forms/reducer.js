import Immutable from 'seamless-immutable';

import { CHANGE_VALUE, CHANGE_ERROR } from './constants';

const inputInitialState = Immutable({});

export default function formsReducer(state = inputInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case CHANGE_ERROR:
      return state.setIn([action.id, 'error'], action.error);
    case CHANGE_VALUE:
      return state.merge({
        [action.id]: {
          touched: true,
          value: action.value,
        },
      });
    default:
      return state;
  }
}
