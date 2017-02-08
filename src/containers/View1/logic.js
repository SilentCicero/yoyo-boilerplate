import { createLogic } from 'redux-logic';

import { CHANGE_LOCATION } from './constants';

export default createLogic({
  type: CHANGE_LOCATION,
  latest: true,

  async process({ getState, action, canceled$ }, dispatch, done) {
    const cool = await Promise.resolve('yes');
    console.log(cool);
    done();
  },
});
