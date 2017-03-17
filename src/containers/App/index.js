import yo from 'fro-yo';
import styled from 'styled-elements';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { connect } from 'store';
import { polyglot, localeTranslations } from 'i18n';

import { router } from 'routes';
import { selectCurrentLocation, selectLocale } from './selectors';


const Wrapper = styled.div`
`;

function App(props) {
  history.pushState({}, null, props.location); // eslint-disable-line

  // handle i18n
  if (polyglot.locale() !== props.locale) {
    polyglot.locale(props.locale);
    polyglot.replace(localeTranslations[props.locale]);
  }

  return yo`
    <Wrapper>
      <Header></Header>
      ${router(props.location)}
      <Footer></Footer>
    </Wrapper>
  `;
}

export function mapStateToProps(state) {
  return {
    location: selectCurrentLocation(state),
    locale: selectLocale(state),
  };
}

export default connect(mapStateToProps)(App);
