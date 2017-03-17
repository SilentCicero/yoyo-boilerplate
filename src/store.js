import yo from 'yo-yo';
import Immutable from 'seamless-immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogicMiddleware } from 'redux-logic';

import logic from 'logic';
import { createReducer } from 'reducers';
import guidGenerator from 'utils/guidGenerator';
import shallowEqualObjects from 'utils/shallowEqualObjects';
import { objectNoop } from 'utils/noop';

const initialState = {};
const componentState = {};

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

// component life cycle with morphdom
export function connect(mapStateToProps, mapDispatchToProps, customStore) {
  const stateProps = objProps => (mapStateToProps || objectNoop)((customStore || store).getState(), objProps);
  const props = objProps => Object.assign({},
    stateProps(objProps),
    (mapDispatchToProps || objectNoop)((customStore || store).dispatch, objProps),
  );

  return component => (elProps) => {
    const id = guidGenerator();
    const comp = component(Object.assign({}, elProps, props(elProps)));
    comp.dataset.id = id;

    const unsubscribe = store.subscribe(() => {
      if (!shallowEqualObjects(stateProps(elProps), componentState[id][0])) {
        const oldEl = document.querySelector(`[data-id='${id}']`); // eslint-disable-line
        if (!oldEl) { unsubscribe(); return; }

        oldEl.querySelectorAll('[data-id]').forEach((el) => {
          componentState[el.dataset.id][1]();
        });

        const ncomp = component(Object.assign({}, elProps, props(elProps)));
        ncomp.dataset.id = id;
        yo.update(oldEl, ncomp);
        componentState[id] = [stateProps(elProps), unsubscribe];
      }
    });

    componentState[id] = [stateProps(elProps), unsubscribe];
    return comp;
  };
}
