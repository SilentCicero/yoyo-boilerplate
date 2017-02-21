import yo from 'fro-yo';
import styled from 'styled-elements';


export const css = styled.css`
  flex: 1;

  ${props => (props.width ? `width: ${props.width};` : '')}
  ${props => (props.maxWidth ? `max-width: ${props.maxWidth};` : '')}
  ${props => (props.minWidth ? `min-width: ${props.minWidth};` : '')}
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
