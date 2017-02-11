import yo from 'fro-yo';
import styled from 'styled-elements';

const Wrapper = styled.div`
  margin-top: 100px;
  font-family: Arial;
`;

export default function NotFound() {
  return yo`
    <Wrapper>
      <h2>Page Not Found</h2>
    </Wrapper>
  `;
}
