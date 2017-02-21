/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Form',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  }, {
    type: 'confirm',
    name: 'wantActionsAndReducer',
    default: true,
    message: 'Do you want an actions/constants/selectors/reducer tuple for this container?',
  }, {
    type: 'input',
    name: 'constants',
    message: 'What constants would you like to start with (e.g. "OPEN_TOGGLE CLOSE_TOGGLE" space seperated, leave blank for none)?',
  }, {
    type: 'input',
    name: 'actions',
    message: 'What basic actions would you like to start with (e.g. "openToggle..." space seperated, leave blank for none)?',
  }, {
    type: 'confirm',
    name: 'wantStyled',
    default: true,
    message: 'Do you want to use styled elements?',
  }, {
    type: 'confirm',
    name: 'wantLogic',
    default: true,
    message: 'Do you want logic for asynchronous flows? (e.g. fetching data)',
  }, {
    type: 'confirm',
    name: 'wantMessages',
    default: true,
    message: 'Do you want i18n messages (i.e. will this component use text)?',
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    const actions = [{
      type: 'add',
      path: '../../src/containers/{{properCase name}}/index.js',
      templateFile: './container/index.js.hbs',
      abortOnFail: true,
    }];

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '../../src/containers/{{properCase name}}/actions.js',
        templateFile: './container/actions.js.hbs',
        abortOnFail: true,
      });

      // Constants
      actions.push({
        type: 'add',
        path: '../../src/containers/{{properCase name}}/constants.js',
        templateFile: './container/constants.js.hbs',
        abortOnFail: true,
      });

      // Selectors
      actions.push({
        type: 'add',
        path: '../../src/containers/{{properCase name}}/selectors.js',
        templateFile: './container/selectors.js.hbs',
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '../../src/containers/{{properCase name}}/reducer.js',
        templateFile: './container/reducer.js.hbs',
        abortOnFail: true,
      });
    }

    // Sagas
    if (data.wantLogic) {
      actions.push({
        type: 'add',
        path: '../../src/containers/{{properCase name}}/sagas.js',
        templateFile: './container/logic.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
