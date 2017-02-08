import yo from 'yo-yo';
import styled from 'styled-elements';

const Wrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 100px;
  padding: 30px;
  background: #F1F1F1;
`;

export default function Footer() {
  return Wrapper(
    yo`<span>yoyo-boilerplate</span>`,
  );
}
