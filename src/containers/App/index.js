import yo from 'fro-yo';
import styled from 'styled-elements';

import Header from 'components/Header';
import Footer from 'components/Footer';

const Wrapper = styled.div`
  font-family: Arial;
`;

export default function App(props) {
  return yo`
    <Wrapper>
      <Header></Header>
      ${props.children}
      <Footer></Footer>
    </Wrapper>
  `;
}
