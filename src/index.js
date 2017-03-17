import yo from 'yo-yo';
import href from 'sheet-router/href';
import past from 'sheet-router/history';

import 'styles';
import { route, changeLocation } from 'routes';
import { store } from 'store';

import App from 'containers/App';
import { updateTime } from 'containers/Time/actions';

const { getState, dispatch } = store;

setInterval(() => dispatch(updateTime()), 1000);

href(location => dispatch(changeLocation(location.pathname)));
past(location => dispatch(changeLocation(location.pathname)));

window.onload = () => document.body.appendChild(App()); // eslint-disable-line
