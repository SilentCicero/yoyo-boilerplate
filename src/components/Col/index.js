import yo from 'fro-yo';
import styled from 'styled-elements';


export const css = styled.css`
  flex: ${props => (props.flex ? props.flex : 1)};

  ${props => (props.basis ? `flex-basis: ${props.basis};` : '')}
`;

export const Wrapper = styled.div`
  ${css}
`;

export default function Col(props) {
  return yo`
    <Wrapper props=${props}>
      ${props.children}
    </Wrapper>
  `;
}
