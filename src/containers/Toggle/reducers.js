import Immutable from 'seamless-immutable';

import { OPEN_TOGGLE, CLOSE_TOGGLE, TOGGLE_TOGGLE, OPEN_STATUS, CLOSED_STATUS } from './constants';
import { selectToggleStatus } from './selectors';

const togglesInitialState = Immutable({});

export default function togglesReducer(state = togglesInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case OPEN_TOGGLE:
      return state.merge({
        [action.name]: {
          status: OPEN_STATUS,
        },
      });
    case CLOSE_TOGGLE:
      return state.merge({
        [action.name]: {
          status: CLOSED_STATUS,
        },
      });
    case TOGGLE_TOGGLE:
      return state.merge({
        [action.name]: {
          status: (selectToggleStatus(state, action) === OPEN_STATUS ? CLOSED_STATUS : OPEN_STATUS),
        },
      });
    default:
      return state;
  }
}
