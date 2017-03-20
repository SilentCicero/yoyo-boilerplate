import { createLogic } from 'redux-logic';

import { changeValue, changeError, formValid } from './actions';
import { CHANGE_VALUE, VALIDATE_FORM } from './constants';
import { validators } from './validators';
import { selectInputValue } from './selectors';

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

export const validateForm = createLogic({
  type: VALIDATE_FORM,
  latest: true,

  async process({ action, getState }, dispatch, done) {
    let totalValidators = 0;
    let validCount = 0;
    const emptyFunc = function () {};
    const inputs = Object.keys(validators[action.form]);

    for (let i = 0; i < inputs.length; i += 1) {
      const inputValue = selectInputValue(getState(), action.form, inputs[i]);
      const totalInputValidators = validators[action.form][inputs[i]].length;
      totalValidators += totalInputValidators;

      for (let v = 0; v < totalInputValidators; v += 1) {
        const errorValue = (validators[action.form][inputs[i]][v] || emptyFunc)(inputValue);
        const error = typeof (errorValue || {}).then === 'function' ? await errorValue : errorValue; // eslint-disable-line

        if (error) {
          dispatch(changeError({ id: inputs[i], form: action.form }, error));
          done();
        } else {
          validCount += 1;

          if (validCount === totalValidators) {
            dispatch(formValid(action.form));
            done();
          }
        }
      }
    }
  },
});
