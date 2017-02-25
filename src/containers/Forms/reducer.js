import Immutable from 'seamless-immutable';

import { CHANGE_VALUE } from './constants';

const inputInitialState = Immutable({});

export default function formsReducer(state = inputInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case CHANGE_VALUE:
      return state.merge({
        [action.id]: {
          value: action.value,
        },
      });
    default:
      return state;
  }
}
