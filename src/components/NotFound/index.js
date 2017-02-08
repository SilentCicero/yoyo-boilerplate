import yo from 'yo-yo';
import styled from 'styled-elements';

const Wrapper = styled.div`
  margin-top: 100px;
  font-family: Arial;
`;

export default function NotFound() {
  return Wrapper(yo`
      <h2>Page Not Found</h2>
  `);
}
