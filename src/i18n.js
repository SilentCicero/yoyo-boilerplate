// require Polyglot
import Polyglot from 'node-polyglot';

// english translation
import enLocaleTranslation from 'translations/en.json';
import { store } from 'store';

// the current locale
const locale = store.getState().language.locale;

// all translations
const localeTranslations = {
  en: enLocaleTranslation,
};

// polyglot instance
const polyglot = new Polyglot({
  locale,
  phrases: localeTranslations[locale],
});

// translate function
export function t(phraseKey, phraseData) {
  return polyglot.t(phraseKey, phraseData);
}

export {
  localeTranslations,
  polyglot,
};
