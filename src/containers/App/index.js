import yo from 'yo-yo';
import styled from 'styled-elements';

import Header from 'components/Header';
import Footer from 'components/Footer';

const Wrapper = styled.div`
  font-family: Arial;
`;

export default function App(children) {
  return Wrapper(
      Header(),
      yo`<div>${children}</div>`,
      Footer(),
    );
}
