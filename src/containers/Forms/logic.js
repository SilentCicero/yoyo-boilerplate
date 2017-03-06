import { createLogic } from 'redux-logic';

import { changeValue, changeError } from './actions';
import { CHANGE_VALUE, VALIDATE_FORM } from './constants';
import { validators } from './validators';

export default createLogic({
  type: CHANGE_VALUE,
  latest: true,

  async process({ action }, dispatch, done) {
    for (let v = 0; v < validators[action.id].length; v += 1) {
      const errorValue = validators[action.id][v](action.value);
      const error = typeof (errorValue || {}).then === 'function' ? await errorValue : errorValue; // eslint-disable-line

      if (error) {
        dispatch(changeError({ id: action.id }, error));
      }
    }

    done();
  },
});

export const formValidationLogic = createLogic({
  type: VALIDATE_FORM,
  latest: true,

  async process({ getState, action }, dispatch, done) {
    let count = 0;
    const form = action.form;

    Object.keys(validators[form]).forEach((input) => {
      if (count === Object.keys(validators[form][input]).length) {
        done();
      }

      count += 1;
    });

    dispatch(changeValue());
  },
});
