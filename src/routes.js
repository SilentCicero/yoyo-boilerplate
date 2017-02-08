import sheetRouter from 'sheet-router';
import App from 'containers/App';
import View1 from 'containers/View1';
import View2 from 'containers/View2';
import NotFound from 'components/NotFound';

export const router = sheetRouter({ default: '/404' }, [ // eslint-disable-line
  ['/', () => View1({})],
  ['/orgs', () => View2()],
  ['/:username', params => View1(params)],
  ['/404', () => NotFound()],
]);

export function route(...args) {
  return App(router(...args));
}

export function changeLocation(location) {
  return {
    type: 'LOCATION_CHANGE',
    location,
  };
}
