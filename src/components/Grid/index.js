import yo from 'fro-yo';
import styled from 'styled-elements';


export const css = styled.css`
  display: flex;
  ${props => (props.spaced ? 'justify-content: space-between;' : '')}

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
