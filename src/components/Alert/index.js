import yo from 'fro-yo';
import styled from 'styled-elements';


const Wrapper = styled.div`
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  margin-bottom: 21px;
  border: 0px;

  background-color: rgb(255, 117, 24);
  border-color: rgb(255, 67, 9);
  color: rgb(255, 255, 255);
`;

export default function Alert(props) {
  return yo`
    <Wrapper>
      ${props.children}
    </Wrapper>
  `;
}
