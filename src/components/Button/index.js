import yo from 'fro-yo';
import styled from 'styled-elements';

const Wrapper = styled.div`
  display: inline-block;
  margin-bottom: 0px;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  border: 1px solid;
  white-space: nowrap;
  padding-top: 10px;
  padding-right: 18px;
  padding-bottom: 10px;
  padding-left: 18px;
  font-size: 15px;
  line-height: 1.42857;
  border-radius: 0px;
  -webkit-user-select: none;

  color: rgb(255, 255, 255);
  background-color: rgb(39, 128, 227);
  border-color: rgb(39, 128, 227);

  &:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(25, 103, 190);
    border-color: rgb(24, 98, 181);
  }
`;

export default function Button(props) {
  return yo`
    <Wrapper>
      ${props.children}
    </Wrapper>
  `;
}
