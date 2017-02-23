import yo from 'fro-yo';
import styled from 'styled-elements';


export const css = styled.css`
  display: flex;
  justify-content: ${props => (props.justify ? props.justify : 'inherit')};
  flex-wrap: ${props => (props.wrap ? props.wrap : 'nowrap')};
  align-items: ${props => (props.align ? props.align : 'inherit')};

  @media (max-width: 400px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  ${css}
`;

export default function Grid(props) {
  return yo`
    <Wrapper props=${props}>
      ${props.children}
    </Wrapper>
  `;
}
