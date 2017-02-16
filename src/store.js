import Immutable from 'seamless-immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogicMiddleware } from 'redux-logic';

import logic from 'logic';
import { createReducer } from 'reducers';

const initialState = {};

export const logicMiddleware = createLogicMiddleware(logic, {});

export function configureStore(initialState = {}) { // eslint-disable-line
  // Create the store with two middlewares
  const middlewares = [
    logicMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? // eslint-disable-line
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose; // eslint-disable-line
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    Immutable(initialState),
    composeEnhancers(...enhancers)
  );

  return store;
}

export const store = configureStore(initialState);

export function objectNoop() {
  return Object.assign({});
}

export function connect(mapStateToProps, mapDispatchToProps, customStore) {
  const props = objProps => Object.assign({},
    (mapStateToProps || objectNoop)((customStore || store).getState(), objProps),
    (mapDispatchToProps || objectNoop)((customStore || store).dispatch, objProps),
  );

  return component => elProps => component(Object.assign({}, elProps, props(elProps)));
}
