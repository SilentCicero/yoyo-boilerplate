import yo from 'fro-yo';
import sheetRouter from 'sheet-router';

import App from 'containers/App';
import View1 from 'containers/View1';
import View2 from 'containers/View2';
import NotFound from 'components/NotFound';

export const router = sheetRouter({ default: '/404' }, [ // eslint-disable-line
  ['/', () => yo`<View1></View1>`],
  ['/orgs', () => yo`<View2></View2>`],
  ['/:username', params => yo`<View1 params=${params}></View1>`],
  ['/404', () => yo`<NotFound></NotFound>`],
]);

export function route(...args) {
  return yo`<App>${router(...args)}</App>`;
}

export function changeLocation(location) {
  return {
    type: 'LOCATION_CHANGE',
    location,
  };
}
