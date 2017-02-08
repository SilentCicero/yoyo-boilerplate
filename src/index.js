import yo from 'yo-yo';
import href from 'sheet-router/href';
import past from 'sheet-router/history';

import 'styles';
import { route, changeLocation } from 'routes';
import { store } from 'store';
import { polyglot, localeTranslations } from 'i18n';

const { getState, dispatch, subscribe } = store;

function render(root) {
  subscribe(() => {
    const location = getState().route.location;
    const locale = getState().language.locale;
    console.log(getState()); // eslint-disable-line

    // update yo
    yo.update(root, route(location));

    // update browser push state
    history.pushState({}, null, location); // eslint-disable-line

    // handle i18n
    if (polyglot.locale() !== locale) {
      polyglot.locale(locale);
      polyglot.replace(localeTranslations[locale]);
    }
  });

  href(location => dispatch(changeLocation(location.pathname)));
  past(location => dispatch(changeLocation(location.pathname)));

  document.body.appendChild(root); // eslint-disable-line
}

window.onload = () => render(route(getState().route.location)); // eslint-disable-line
