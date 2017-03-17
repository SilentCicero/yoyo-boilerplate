import Immutable from 'seamless-immutable';

import { UPDATE_TIME } from './constants';

const timeInitialState = Immutable({
  current: (new Date()).getTime() / 1000,
});

export default function timeReducer(state = timeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case UPDATE_TIME:
      return state.merge({
        current: action.current,
      });
    default:
      return state;
  }
}
