import { createLogic } from 'redux-logic';

import { changeValue, changeError } from './actions';
import { CHANGE_VALUE, VALIDATE_FORM } from './constants';
import { validators } from './validators';

export default createLogic({
  type: CHANGE_VALUE,
  latest: true,

  async process({ action }, dispatch, done) {
    for (let v = 0; v < validators[action.form][action.id].length; v += 1) {
      const errorValue = validators[action.form][action.id][v](action.value);
      const error = typeof (errorValue || {}).then === 'function' ? await errorValue : errorValue; // eslint-disable-line

      if (error) {
        dispatch(changeError({ id: action.id, form: action.form }, error));
      }
    }

    done();
  },
});

async function errorReturn(errorValue) {
  const val = typeof (errorValue || {}).then === 'function' ? await errorValue : errorValue;
  return val;
}
